import {Grid, List, ListItem, ListItemIcon, ListItemText, Checkbox, Button, Paper} from '@material-ui/core'
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles'
import ArrowRightSharpIcon from '@material-ui/icons/ArrowRightSharp';
import ArrowLeftSharpIcon from '@material-ui/icons/ArrowLeftSharp';
import React from 'react';
import { options } from '../consts/consts';

interface Props {
  setFunction ?: any,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 'auto',
      display: 'flex',
    },
    paper: {
      width: 250,
      height: 350,
      overflow: 'auto',
      border: "1px solid #4254B5",
      margin: "1rem"
    },
    button: {
      border: "1px solid #4254B5",
      backgroundColor: 'white',
      margin: theme.spacing(0.5, 0),
    },
  }),
);

function not(a: string[], b: string[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: string[], b: string[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function TransferList(props : Props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState<string []>([]);
  const [left, setLeft] = React.useState<string []>(options);
  const [right, setRight] = React.useState<string []>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked : string [] = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  React.useEffect(() => {
    props.setFunction(right)
  }, [right, props])

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked))
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (items: string[]) => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items.map((value: string) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  color="primary"
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right">
          <ArrowRightSharpIcon color="primary"/></Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left">
          <ArrowLeftSharpIcon color="primary"/></Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
}