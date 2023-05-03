import { FC, ReactElement } from 'react';
import { Experiences } from 'src/types/modules';

type Columns = {
  name: string;
  accessor: (any) => any;
  cell: (any) => any;
};

type TableProps = {
  columns: Columns[];
  children: ReactElement | any;
};

const renderCell = (row: any, column: any) => {
  const { accessor, cell }: any = column;
  return typeof accessor === 'string' && !cell
    ? row[accessor]
    : typeof accessor === 'string'
    ? cell(row[accessor])
    : !cell
    ? ''
    : cell(accessor(row));
};

const TableComponent: FC<TableProps> = ({ columns = [], children }) => {
  return (
    <table className="table w-full mt-5">
      <thead>
        <tr>
          {columns?.map((column) => (
            <th key={column.name}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

type RowsProps = {
  columns: Columns[];
  row: Experiences;
};

const Rows: FC<RowsProps> = ({ columns = [], row = {} }) => {
  return (
    <tr>
      {columns?.map((column) => (
        <td key={column.name} className="text-sm">
          {renderCell(row, column)}
        </td>
      ))}
    </tr>
  );
};

export default TableComponent;

export { Rows };
