import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state={
    type:0,
    person_init:false,  //是否在发布过程中
    all_design_man:[],
    all_apply_man:[ ],
    select_design_man:[],
    select_apply_man:[],

    book:[
        {name:'冈本有限公司',img:'static/book.jpg'},
        {name:'冈本有限公司',img:'static/book.jpg'},
        {name:'冈本有限公司',img:'static/book.jpg'},
        {name:'冈本有限公司',img:'static/book.jpg'},
    ],
    contact:'',
    
}
const mutations = {
        set_contact(state,data){
            state.contact=data
        },
        set_person_init(state,data){
            state.person_init=data
        },
        set_book(state,data){
            state.book.push(data)
        },
        set_type(state,num){
            state.type=num
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
            if(obj.name=='design'){
                state.all_design_man.push(...obj.data)
            }else if(obj.name=='apply'){
                state.all_apply_man.push(...obj.data)
                console.log(state.all_apply_man,obj.data);
                
            }
        }

    };
export default new Vuex.Store({
    state,mutations
})