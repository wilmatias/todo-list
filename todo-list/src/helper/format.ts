import { format, parseISO } from 'date-fns';

export const readableDate = (date: string) => {
    console.log(date)
    const parsedDate = parseISO(date); 
    return format(parsedDate, 'MMMM d, yyyy');
};