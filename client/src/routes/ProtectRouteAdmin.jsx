import React, { useState, useEffect } from 'react'
import usePortStore from '../store/port-store'
import { currentAdmin } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'


const ProtectRouteAdmin = ({ element }) => {
    const [ok, setOk] = useState(false)
    const admin = usePortStore((state) => state.admin)
    const token = usePortStore((state) => state.token)

    useEffect(() => {
        if (admin && token) {
            // send to back
            currentAdmin(token)
                .then((res) => setOk(true))
                .catch((err) => setOk(false))
        }
    }, [])

    return ok ? element : <LoadingToRedirect />
}

export default ProtectRouteAdmin