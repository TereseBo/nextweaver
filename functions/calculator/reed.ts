
import { Reed } from '@/types/reed';

function calculateEpc(dents:number, section:number, tpd:number):number{
    return Math.round((dents/section)*tpd);
}