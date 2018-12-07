import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant';
axios.interceptors.request.use(config => {
    if(config.url!='api/pub/upload'){
        if(!config.data) config.data={}
        config.data.openid=localStorage.getItem('openid') 
        config.data.client_id=localStorage.getItem('client_id')
        config.data=qs.stringify(config.data) //上传不可用
    }
    return config
},err=>{
    Toast.fail('客户端通讯出错')
})
axios.interceptors.response.use(res => {
        if(!res.data){  //没有任何数据
            Toast.fail('服务器没有响应')
            return  
        }
        if(res.config.url=="http://fj.pizhigu.com/index/service/craw_query.html")
            return res
        switch(res.data.code){
            case 0:
                return res
            case 1:   
                Toast.fail(res.data.msg || '业务数据异常'  )
                break
            case 401:
            case 402:
            case 403:
                localStorage.clear()
                self.location=""
                break
            default:
                Toast.fail(res.data.msg ||'数据异常' )
                break 
        }

},err => {
    if(err.toString().includes('500')){
        Toast.fail('平台数据异常' )

    }else{
        Toast.fail('无法连接服务器' )
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
const add_applicant=function(data){  
    return axios.post('api/client/add_applicant',data);
}
const add_designer=function(data){  
    return axios.post('api/client/add_designer',data);
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
const cal_case_money=function(data){  
    return axios.post('api/client/cal_case_money',data);
}
const design_add_case=function(data){  
    return axios.post('api/client/design_add_case',data);
}
const create_wxpay_order=function(data){  
    return axios.post('api/client/create_wxpay_order',data);
}
const jssdk=function(data){  
    return axios.post('api/pub/jssdk',data);
}

const cha_fj=function(data){  
    return axios.post('http://fj.pizhigu.com/index/service/craw_query.html',data);
}

export {
    sendSMS,
    wechat_bind,
    userinfo_wechat,
    pubUpdate,
    applicant,
    designer,
    mycase,
    add_applicant,
    add_designer,
    cha_fj,
    cal_case_money,
    design_add_case,
    create_wxpay_order,
    jssdk

}