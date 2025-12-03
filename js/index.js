// 定义下载链接（替换原来的PHP变量）
const downloadLinks = {
    "apk": "https://sdrwqsd.cloudforent23.vip/Tiktok",  // 安卓APK下载链接
    "ios": "https://m2yyn.jjmh22.com/tNnQ/vAy3YbxVKEOgeDyy"   // iOS下载链接
};

// 构建响应数据（替换原来的PHP数组）
const appData = {
    "code": 1000,  // 状态码
    "message": "success",  // 消息
    "data": {
        "apk": {
            "download_apk": downloadLinks['apk'],  // 安卓下载链接
            "download_ios": downloadLinks['ios']   // iOS下载链接
        }
    },
    "version": "1.2.1"  // 版本号
};

// 模拟PHP的JSON响应
function getApkDownloadData() {
    return appData;
}

// 通用的下载函数
function downloadApp() {
    const res = getApkDownloadData();
    var userAgent = navigator.userAgent; //获取userAgent信息  
    if (userAgent.includes('iPhone')) {
        window.location.href = res.data.apk.download_ios;
    } else {
        window.location.href = res.data.apk.download_apk;
    }
}

function goTk() {
    downloadApp();
}

function goApp() {
    downloadApp();
}

function goGo() {
    downloadApp();
}

// 如果需要保持与原来相同的异步请求结构，可以使用这个版本
function downloadAppAsync(callback) {
    // 模拟异步请求
    setTimeout(() => {
        const res = getApkDownloadData();
        callback(res);
    }, 0);
}

function goTkAsync() {
    downloadAppAsync(function(res) {
        var userAgent = navigator.userAgent;
        if (userAgent.includes('iPhone')) {
            window.location.href = res.data.apk.download_ios;
        } else {
            window.location.href = res.data.apk.download_apk;
        }
    });
}

function goAppAsync() {
    downloadAppAsync(function(res) {
        var userAgent = navigator.userAgent;
        if (userAgent.includes('iPhone')) {
            window.location.href = res.data.apk.download_ios;
        } else {
            window.location.href = res.data.apk.download_apk;
        }
    });
}

function goGoAsync() {
    downloadAppAsync(function(res) {
        var userAgent = navigator.userAgent;
        if (userAgent.includes('iPhone')) {
            window.location.href = res.data.apk.download_ios;
        } else {
            window.location.href = res.data.apk.download_apk;
        }
    });
}

// 如果您需要从URL参数获取不同的下载链接，可以使用这个扩展版本
function initDownloadLinks() {
    // 这里可以添加逻辑来动态设置下载链接
    // 例如从URL参数、配置文件等获取
    return downloadLinks;
}

// 初始化
initDownloadLinks();
