export interface Framework {
    name: string;
    displayName: string;
    path: string;
    color: string;
}

export const frameworks: Framework[] = [
    { name: 'astro', displayName: 'Astro', path: '/', color: '#FF5D01' },
    { name: 'react', displayName: 'React', path: '/react', color: '#61DAFB' }

];
