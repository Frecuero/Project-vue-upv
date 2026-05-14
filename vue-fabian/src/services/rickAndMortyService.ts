import { reactive, ref, toRefs } from "vue";
import type { Character, ApiResponse } from "../models/rickAndMorty";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export function useCharacters() {
    const characters = ref<Character[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);
    
    const state = reactive({
      isFinding: false,
      name: "",
      page: 1,
      hasMore: true,
      placeholderText: "",
    });
  
    let abortController: AbortController | null = null;
    let placeholderInterval: number | null = null;
  
    const fetchData = async (url: string, append = false) => {
      if (abortController) abortController.abort();
      abortController = new AbortController();
  
      loading.value = true;
      try {
        const response = await fetch(url, { signal: abortController.signal });
        
        if (!response.ok) throw new Error("No se encontraron resultados");
        
        const data: ApiResponse = await response.json();
  
        characters.value = append 
          ? [...characters.value, ...(data.results || [])] 
          : (data.results || []);
        
        state.hasMore = !!data.info?.next;
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          error.value = err.message;
          characters.value = [];
        }
      } finally {
        loading.value = false;
      }
    };
  
    const fetchInitialCharacters = (page = 1) => {
      state.isFinding = false;
      state.page = page;
      fetchData(`${BASE_URL}/?page=${page}`, page > 1);
    };
  
    const searchCharacters = (name: string) => {
      if (name.length < 3) {
        if (name.length === 0) fetchInitialCharacters();
        return;
      }
      state.isFinding = true;
      state.name = name;
      state.page = 1;
      fetchData(`${BASE_URL}/?name=${name}&page=1`, false);
    };
  
    const loadNextPage = () => {
      if (loading.value || !state.hasMore) return;
      state.page++;
      const url = state.isFinding 
        ? `${BASE_URL}/?name=${state.name}&page=${state.page}`
        : `${BASE_URL}/?page=${state.page}`;
      fetchData(url, true);
    };
  
    const startTyping = (names: string[]) => {
      let charIdx = 0;
      let nameIdx = 0;
      
      placeholderInterval = window.setInterval(() => {
        if (!names.length) return;
        const currentName = names[nameIdx];
        
        if (charIdx < currentName.length) {
          state.placeholderText += currentName[charIdx];
          charIdx++;
        } else {
          state.placeholderText = "";
          charIdx = 0;
          nameIdx = (nameIdx + 1) % names.length;
        }
      }, 150);
    };
  
    const stopTyping = () => {
      if (placeholderInterval) clearInterval(placeholderInterval);
    };
  
    return {
      ...toRefs(state),
      characters,
      loading,
      error,
      fetchInitialCharacters,
      searchCharacters,
      loadNextPage,
      startTyping,
      stopTyping
    };
  }