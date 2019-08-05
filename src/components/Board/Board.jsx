import React from 'react'
import  Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Board = () => {

    const list = Object.keys(localStorage).map(key => {
        const listItem = JSON.parse(localStorage.getItem(key));
        console.log(listItem.someKey.Data[0]);
        return (
            <TableRow className={key}>
                <TableCell>{key}</TableCell>
                <TableCell>{listItem.someKey.Data[2]}</TableCell>
                <TableCell>{listItem.someKey.Data[0].status}</TableCell>
                <TableCell>{listItem.someKey.Data[0].priority}</TableCell>
                <TableCell>{listItem.someKey.Data[0].grav}</TableCell>
            </TableRow>
        )

    });
    return (
        <div>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Номер</TableCell>
                        <TableCell>Автор</TableCell>
                        <TableCell>Статус</TableCell>
                        <TableCell>Приоритет</TableCell>
                        <TableCell>Серьёзность</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list}
                </TableBody>
            </Table>
        </div>

    )
};

export default Board