import { v4 as uuidv4 } from 'uuid'

function getUuid(){
  return uuidv4().replaceAll('-', '')
}

export {
  getUuid
}