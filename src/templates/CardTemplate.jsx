import React from 'react'
import CustomCard from '../molekuls/CustomCard'
import { useQuery } from '@tanstack/react-query'
import { getUserService } from '../services/http'
import IsLoading from '../atoms/IsLoading'

const CardTemplate = () => {
    const { data: userData, isError: userIsError, error: userError, isLoading: userIsLoading } = useQuery({
        queryKey: ["users"],
        queryFn: getUserService
    })
    if (userIsError) {
        return <button className='error_dialog'>{
            userError.message
        }</button>
    }
    if (userIsLoading) {
        return <IsLoading />
    }
    return (
        <div className='container'>
            <div className='flex flex-wrap'>
                {
                    userData && userData.map((item, index) => {
                        return <CustomCard key={index} name={item.name} email={item.email} />
                    })
                }
            </div>
        </div>
    )
}

export default CardTemplate