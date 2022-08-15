import { combineReducers, createStore } from "redux";
let users=[{
    name:"akbar",
    pass:"akbar"
}];
let renderC=''
function setData()
{
    return users;
}
function deleteData(){
    return users

}
function renderComponent(olddata=renderC,newdata)
{
    
 olddata=newdata
    return olddata;
}
let join=combineReducers({setData,deleteData,renderComponent})
let storeData= createStore(join)
export default storeData 