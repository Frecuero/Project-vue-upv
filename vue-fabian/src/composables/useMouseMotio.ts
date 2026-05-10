import { ref } from "vue";

interface Coordinates {
    x: number;
    y: number;
  }

export const useMouseMotion = () => {
    const mousePosition = ref<Coordinates>({ x: 0, y: 0 });

    const cumMouseMove = (e: MouseEvent ) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect();
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        mousePosition.value = {
            x: (mouseX - centerX ) * 0.1, 
            y: (mouseY - centerY) * 0.1,
        };
    }

    const cumMouseLeave = () => {
        mousePosition.value = { x: 0, y: 0 };
    }

      
    return {
        mousePosition,
        cumMouseMove,
        cumMouseLeave
    }
}