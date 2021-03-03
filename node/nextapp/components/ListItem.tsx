import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const basepath = publicRuntimeConfig.basePath || "";

type Props = {
  data: User
}

const ListItem = ({ data }: Props) => (
  <Link href={`/users/id?id=${data.id}`} as={`${basepath}/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
