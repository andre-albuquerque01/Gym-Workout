'use server'

import ApiAction from '@/functions/data/apiAction'
import { cookies } from 'next/headers'

export async function UpdateUser(reqBody: object) {
  try {
    const response = await ApiAction('/user/update', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookies().get('token')?.value,
      },
      body: JSON.stringify(reqBody),
    })

    const data = await response.json()

    return data
  } catch (error) {
    return 'Houver error'
  }
}
