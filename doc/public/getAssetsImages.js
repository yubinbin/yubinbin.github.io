// 动态获取图片

const getAssetsImages = (name) => {
    return new URL(`/src/assets/images/${name}`, import.meta.url).href
}

export default getAssetsImages;