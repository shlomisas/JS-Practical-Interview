/**
 * Created by Shlomi on 05/09/2015.
 */

export default {
    log: function(msg){
        console.log(msg);
    },
    error: function(e){
        console.error(e);
    },
    fakeAjax: function(url){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(url);
            }, 3000);
        });
    },
    getFakeUserData(id, username){
        return {id: id || 1, username: username || 'Shlomi Sasson', toString(){
            return 'id: '+this.id+', name: '+this.username;
        }}
    },
    loadFakeUserData(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(this.getFakeUserData());
            }, 3000);
        });
    }
}
