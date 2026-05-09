export const scrollToSection = (sectionId: string) => {
    if (sectionId === "#") { 
        window.scrollTo({top: 0, behavior: 'smooth'})
    } 
    const element = document.querySelector<HTMLElement>(sectionId);
    
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}