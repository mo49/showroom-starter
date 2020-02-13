import UA from './UA'

export function　setViewport() {
    const ua = new UA()
    const viewportContent = ua.info.Mobile ? 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' : ''
    document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent)
}