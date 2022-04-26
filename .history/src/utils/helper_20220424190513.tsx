import React from 'react'
import * as moment from 'moment'


/** Dates with moment.js Format, look in momentjs.com "Docs > Display > Format" */
export const Date = ({ datetime, format }) => <span className="date-format">{ moment(datetime).format(`${format}`) }</span>;
