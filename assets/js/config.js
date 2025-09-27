// 版本检查
(function() {
    const storedVersion = localStorage.getItem('app_version');
    if (storedVersion !== APP_VERSION) {
        console.log('检测到新版本，清除缓存...');
        const theme = localStorage.getItem('theme');
        const imgHostSettings = localStorage.getItem('imgHostSettings');
        localStorage.clear();
        if (theme) localStorage.setItem('theme', theme);
        if (imgHostSettings) localStorage.setItem('imgHostSettings', imgHostSettings);
        localStorage.setItem('app_version', APP_VERSION);
    }
})();

// 图床默认配置
const imgHost = {
    type: "NodeImage", // 图床类型, 支持 LskyPro / EasyImages / NodeImage
    url: "https://api.nodeimage.com", // 图床地址, 带上协议头
    token: "", // NodeImage 的 API 密钥
    copyFormat: "markdown" // 默认为URL格式
};