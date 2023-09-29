function isExcutable(extension = ""){
    const executableExtensions = ["exe", "com", "bat", "sh", "ps1", "cmd"];
    return executableExtensions.includes(extension);
}

function isImage(extension = ""){
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"]
    return imageExtensions.includes(extension)
}

function isVideo(extension = ""){
    const videoExtensions = ["mp4", "mpeg", "avi", "mov", "wmv"];
    return videoExtensions.includes(extension)
}

function isAudio(extension = ""){
    const audioExtensions = ["mp3", "wav", "ogg", "aac", "flac"];
    return audioExtensions.includes(extension)
}

module.exports = {isExcutable, isImage, isVideo, isAudio}