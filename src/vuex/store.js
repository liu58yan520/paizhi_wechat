import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
    person_init:false,  //是否在发布过程中
    all_design_man:[],
    all_apply_man:[ ],
    select_design_man:[],
    select_apply_man:[],
    fm:{},
    tech_tel:'',
    
}
const mutations = {
        set_var(state,data){
            if(data.set_type=='arr'){
                if(Array.isArray(data.data))
                    state[data.var_name].push(...data.data) 
                else 
                state[data.var_name].push(data.data)
            }else if(data.set_type=='obj'){
                state[data.var_name]=Object.assign(state[data.var_name], data.data)
            }else
                state[data.var_name]=data.data
        },

        set_select_data(state,obj) {
            if(obj.name=='design'){
                state.select_design_man.length=0
                obj.data.forEach(index => {
                    state.select_design_man.push(state.all_design_man[index]);
                });
            }else if(obj.name=='apply'){
                state.select_apply_man.length=0
                obj.data.forEach(index => {
                    state.select_apply_man.push(state.all_apply_man[index]);
                });
            }
    　　},
        rm_select_data(state,obj){
            if(obj.name=='design'){
                state.select_design_man.splice(obj.index, 1);
            }else if(obj.name=='apply'){
                state.select_apply_man.splice(obj.index, 1);
            }
        },
        add_all_data(state,obj){
            let str='all_'+obj.name+'_man'
           
            if( Array.isArray(obj.data)){
                state[str]=obj.data
            }else {
                for (const el of state[str]) {
                    if(el.no==obj.data.no)
                        return 
                }
                state[str].push(obj.data)
            }
        }

    };
export default new Vuex.Store({
    state,mutations
})