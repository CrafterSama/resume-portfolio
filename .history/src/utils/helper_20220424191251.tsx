import { FC } from 'react'
import * as moment from 'moment';

type DateProps = {
    datetime: string;
    format?: string;
};

/** Dates with moment.js Format, look in momentjs.com "Docs > Display > Format" */
export const Date: FC<DateProps> = ({ datetime, format }) => <span className="date-format">{ moment(datetime).format(`${format}`) }</span>;
