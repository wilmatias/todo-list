import { format, parseISO } from 'date-fns';

export const readableDate = (date: string) => {
    const parsedDate = parseISO(date); 
    return format(parsedDate, 'MMMM d, yyyy');
};