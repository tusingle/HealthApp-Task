import { useContext, useEffect, useState } from "react";
import { TABLE, stateType } from "../../store/store-types";
import HealthDataContext from "../../context/health-data-context";
import { useParams } from "react-router-dom";
import { initalState } from "../../store/reducer-store";
import styless from './EditHealthData.module.scss'

const EditHealthData = () => {

    const parms:any = useParams();
   const {users, dispatchFun} = useContext(HealthDataContext);
    const [ userData, setUserData ] = useState<stateType>(initalState[0]);
     
    useEffect( () =>{
        if (parms.userId){
            users.forEach(user=> {
                if (user.id == parseInt(parms.userId)){
                 setUserData(user)
                }
             } )
        }
   
    }, [parms] )
    


    const onNameChange = (e:any) => {

        const newUserData = {...userData, name: e.target.value};
        setUserData(newUserData)
        const action = {
             type: 'UPDATE_USER_DATA',
             userData:userData

        }
        dispatchFun(action);
    }

    const onChangeBP = (e:any) => {
        const newBP = {...userData.BP, value: e.target.value};
        const newUserData = {...userData, BP: newBP};
        setUserData(newUserData)
         const action = {
             type: 'UPDATE_USER_DATA',
             userData:userData

        }
        dispatchFun(action);
    }
    const onChangeHR = (e:any) => {
        const newHR = {...userData.HR, value: e.target.value};
        const newUserData = {...userData, HR: newHR};
        setUserData(newUserData)
         const action = {
             type: 'UPDATE_USER_DATA',
             userData:userData

        }
        dispatchFun(action);
    }
    const onChangeSBP = (e:any) => {
        const newSBP = {...userData.SBP, value: e.target.value};
        const newUserData = {...userData, SBP: newSBP};
        setUserData(newUserData)
         const action = {
             type: 'UPDATE_USER_DATA',
             userData:userData

        }
        dispatchFun(action);
    }
    const onChangeDBP = (e:any) => {
        const newDBP = {...userData.DBP, value: e.target.value};
        const newUserData = {...userData, DBP: newDBP};
        setUserData(newUserData)
         const action = {
             type: 'UPDATE_USER_DATA',
             userData:userData

        }
        dispatchFun(action);
    }
    const onChangePR = (e:any) => {
        const newPR = {...userData.PR, value: e.target.value};
        const newUserData = {...userData, PR: newPR};
        setUserData(newUserData)
         const action = {
             type: 'UPDATE_USER_DATA',
             userData:userData

        }
        dispatchFun(action);
    }
    const onChangeSR = (e:any) => {
        const newSR = {...userData.SR, value: e.target.value};
        const newUserData = {...userData, SR: newSR};
        setUserData(newUserData)
         const action = {
             type: 'UPDATE_USER_DATA',
             userData:userData

        }
        dispatchFun(action);
    }
    return (
        <div>


<form className={styless['user-form']}>
    

<p>ID :- {userData.id}</p>

<div>
    <text>User Name </text>
<input type="text" 
value={userData.name} 
onChange={onNameChange} 
placeholder="name" />

</div>

<div>
    <text>Blood Pressure</text>
<input 
    type="number" 
    value={userData.BP.value}
    onChange={onChangeBP}
    placeholder={userData.BP.name} />
</div>
<div>
    <text>Heart Rate</text>
<input 
    type="number" 
    value={userData.HR.value}
    onChange={onChangeHR}
    placeholder={userData.HR.name} />
</div>

<div>
    <text>Sistolic Blood Pressure</text>
<input 
    type="number" 
    value={userData.SBP.value}
    onChange={onChangeSBP}
    placeholder={userData.SBP.name} />
</div>
<div>
    <text>Distolic Blood Pressure</text>
<input 
    type="number" 
    value={userData.DBP.value}
    onChange={onChangeDBP}
    placeholder={userData.DBP.name} />
</div>
<div>
    <text>Pulse Rate</text>
<input 
    type="number" 
    value={userData.PR.value}
    onChange={onChangePR}
    placeholder={userData.PR.name} />
</div>

<div>
    <text>Sugar</text>
<input 
    type="number" 
    value={userData.SR.value}
    onChange={onChangeSR}
    placeholder={userData.SR.name} />
</div>




</form>


        </div>
    )
};

export default EditHealthData;