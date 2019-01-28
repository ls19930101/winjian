import React,{PureComponent} from 'react';
import {
        DownloadWrapper,
        DownloadInfo
} from '../style';

class Download extends PureComponent{
    render(){
        return (
            <DownloadWrapper>
                <img className="qrcode" alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
                <DownloadInfo>
                    <div className="title">下载简书手机App</div>
                    <div className="desc">随时随地发现和创作内容</div>
                </DownloadInfo>
                
            </DownloadWrapper>
        )
    }
}

export default Download;