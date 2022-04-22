import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Content.module.scss";


const EditorAuth = ({user}) => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    })

    const onSubmit = (data:any) => {
        console.log(JSON.stringify(data))
        reset()
    }

    return(
        <div className={styles.editorAuth}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
            <div>
                <div>Name</div>
                <input
                 {...register('name', {
                    required:'Поле обязательное к заполнению',
                    
                })}
                placeholder={user.name}
                />
                
            </div>
            <div style={{color: "red"}}>{errors?.name && <p> {errors?.name?.message || 'Error' }</p>}</div>
            <div>
                <div>User name</div>
                <input
                {...register('username', {
                    required:'Поле обязательное к заполнению',
                    
                })}
                placeholder={user.username} />
            </div>
            <div style={{color: "red"}}>{errors?.username && <p> {errors?.username?.message || 'Error' }</p>}</div>
            <div>
                <div>E-mail</div>
                <input 
                {...register('email', {
                    required:'Поле обязательное к заполнению',
                    
                })}
                placeholder={user.email} />
            </div>
            <div style={{color: "red"}}>{errors?.email && <p> {errors?.email?.message || 'Error' }</p>}</div>
            <div>
                <div>Street</div>
                <input 
                {...register('street', {
                    required:'Поле обязательное к заполнению',
                    
                })}
                placeholder={user.address.street} />
            </div>
            <div style={{color: "red"}}>{errors?.street && <p> {errors?.street?.message || 'Error' }</p>}</div>
            <div>
                <div>City</div>
                <input 
                {...register('city', {
                    required:'Поле обязательное к заполнению',
                    
                })}
                placeholder={user.address.city} />
            </div>
            <div style={{color: "red"}}>{errors?.city && <p> {errors?.city?.message || 'Error' }</p>}</div>
            <div>
                <div>Zip code</div>
                <input 
                 {...register('zipCode', {
                    required:'Поле обязательное к заполнению',
                    
                })}
                placeholder={user.address.zipcode} />
            </div>
            <div style={{color: "red"}}>{errors?.zipCode && <p> {errors?.zipCode?.message || 'Error' }</p>}</div>
            <div>
                <div>Phone</div>
                <input 
                {...register('phone', {
                    required:'Поле обязательное к заполнению',
                    
                })}
                placeholder={user.phone}/>
            </div>
            <div style={{color: "red"}}>{errors?.phone && <p> {errors?.phone?.message || 'Error' }</p>}</div>
            <div>
                <div>Website</div>
                <input 
                {...register('website', {
                    required:'Поле обязательное к заполнению',
                    
                })}
                placeholder={user.website} />
            </div>
            <div style={{color: "red"}}>{errors?.website && <p> {errors?.website?.message || 'Error' }</p>}</div>
            <div>
                <div>Comment</div>
                <textarea />
            </div>
            
            <input className={styles.send} type="submit" {...register('comment')} />
            </form>
        </div>
    )
}

export default EditorAuth