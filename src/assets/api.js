import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant';
axios.interceptors.request.use(config => {
    if(!config.data) config.data={}
    config.data.openid=localStorage.getItem('openid') 
    config.data.client_id=localStorage.getItem('client_id')
    
    config.data=qs.stringify(config.data)
    config.headers['http-x-token'] = ''
    return config
},err=>{
    Toast('客户端通讯出错')
})
axios.interceptors.response.use(res => {
        if(!res.data){  //没有任何数据
            Toast('服务器没有响应')
            return  
        }
        switch(res.data.code){
            case 0:
                return res
                break
            case 1:   
                Toast(res.data.msg || '业务数据异常'  )
                break
            case 401:
            case 402:
            case 403:
                localStorage.clear()
                // router.push('login')
                Toast('登陆超时，请重新登陆')
                break
            default:
                Toast(res.data.msg ||'数据异常' )
                break 
        }

},err => {
    if(err.toString().includes('500')){
        Toast('平台数据异常' )

    }else{
        Toast('无法连接服务器' )
    }
}

)

const sendSMS=function(data){  //发送短信 reg,forget_pwd,bind
    data.type='雇主端'
    return axios.post('api/pub/send_sms',data);
}
const pubUpdate=function(data){  //发送短信 reg,forget_pwd,bind
    data.append("openid", localStorage.getItem('openid'));
    data.append("client_id", localStorage.getItem('client_id'));
    return axios.post('api/pub/upload',data,{headers: {"Content-Type": "multipart/form-data"}});
}
const wechat_bind=function(data){  
    return axios.post('api/client/wechat_bind',data);
}
const userinfo_wechat=function(data){  
    return axios.post('api/client/userinfo_wechat',data);
}
const design_add_case=function(data){  
    return axios.post('api/client/design_add_case',data);
}
const applicant=function(data){  //申请人列表
    return axios.post('api/client/applicant',data);
}
const designer=function(data){  //申请人列表
    return axios.post('api/client/designer',data);
}
const mycase=function(data){  
    return axios.post('api/client/mycase',data);
}

export {
    sendSMS,
    wechat_bind,
    userinfo_wechat,
    design_add_case,
    pubUpdate,
    applicant,
    designer,
    mycase
}