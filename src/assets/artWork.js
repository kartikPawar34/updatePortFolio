const modules = import.meta.glob('../../images/*.{png,jpg,jpeg,webp}', { eager: true });

const projectData = Object.keys(modules).map((path, index) => {
    const imageUrl = modules[path].default;

    return {
        id: index + 1,
        image: imageUrl
    };
});

export default projectData;