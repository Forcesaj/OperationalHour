import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
//import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
//import Paper from "@material-ui/core/Paper";
//import StarIcon from "@material-ui/icons/Star";
//import SnackbarContent from "@material-ui/core/SnackbarContent";
//import IconButton from "@material-ui/core/IconButton";
//import CommentIcon from "@material-ui/icons/Comment";
//import ListItemIcon from "@material-ui/core/ListItemIcon";
//import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
//import { Button } from "@material-ui/core";
//import List from "@material-ui/core/List";
//import ClickAwayListener from "@material-ui/core/ClickAwayListener";
//import MenuItem from "@material-ui/core/MenuItem";
//import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <card component="nav" className={classes.root} aria-label="contacts">
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" />
        <h2>
          <Box fontFamily="Roboto">Pilih hari dengan jam buka yang salah</Box>
        </h2>

        {/* <Divider light /> */}
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Minggu</Typography>
            {/* //Status Default */}
            <Typography className={classes.secondaryHeading}>Tutup</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <TextField
              id="time"
              label="Jam Masuk"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
            <div> - </div>
            <TextField
              id="time"
              label="Jam Keluar"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />

            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Buka 24 jam, kecuali saat tutup"
              labelPlacement="end"
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>

        {/* <Divider light /> */}
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Senin</Typography>
            <Typography className={classes.secondaryHeading}>
              09.00 - 18.00
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField
              id="time"
              label="Jam Masuk"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
            <div> - </div>
            <TextField
              id="time"
              label="Jam Keluar"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
          </ExpansionPanelDetails>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Buka 24 jam, kecuali saat tutup"
            labelPlacement="end"
          />
        </ExpansionPanel>
        {/* <Divider light /> */}
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Selasa</Typography>
            <Typography className={classes.secondaryHeading}>
              09.00 - 18.00
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <TextField
              id="time"
              label="Jam Masuk"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
            <div> - </div>
            <TextField
              id="time"
              label="Jam Keluar"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
          </ExpansionPanelDetails>

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Buka 24 jam, kecuali saat tutup"
            labelPlacement="end"
          />
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Rabu</Typography>
            <Typography className={classes.secondaryHeading}>
              09.00 - 18.00
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <TextField
              id="time"
              label="Jam Masuk"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
            <div> - </div>
            <TextField
              id="time"
              label="Jam Keluar"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
          </ExpansionPanelDetails>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Buka 24 jam, kecuali saat tutup"
            labelPlacement="end"
          />
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>Kamis</Typography>
            <Typography className={classes.secondaryHeading}>
              09.00 - 18.00
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <TextField
              id="time"
              label="Jam Masuk"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
            <div> - </div>
            <TextField
              id="time"
              label="Jam Keluar"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
          </ExpansionPanelDetails>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Buka 24 jam, kecuali saat tutup"
            labelPlacement="end"
          />
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Typography className={classes.heading}>Jumat</Typography>
            <Typography className={classes.secondaryHeading}>
              09.00 - 18.00
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <TextField
              id="time"
              label="Jam Masuk"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
            <div> - </div>
            <TextField
              id="time"
              label="Jam Keluar"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
          </ExpansionPanelDetails>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Buka 24 jam, kecuali saat tutup"
            labelPlacement="end"
          />
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Typography className={classes.heading}>Sabtu</Typography>
            <Typography className={classes.secondaryHeading}>Tutup</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <TextField
              id="time"
              label="Jam Masuk"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
            <div> - </div>
            <TextField
              id="time"
              label="Jam Keluar"
              type="time"
              defaultValue="07:30"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 0 // 5 min
              }}
            />
          </ExpansionPanelDetails>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="Buka 24 jam, kecuali saat tutup"
            labelPlacement="end"
          />
        </ExpansionPanel>

        <h3 fontFamily="Roboto">
          Pengecualian atau hari libur
          <br />
          <Box fontSize={12} fontStyle="italic" m={1}>
            Tetapkan jam khusus atau jadwal liburan
          </Box>
        </h3>

        <Divider light />
        <div>
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            style={{ color: blue }}
            onClick={handleClick}
          >
            (+) Tambahkan jam khusus
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <h2>
              <Box fontFamily="Roboto">Pilih hari khusus</Box>
            </h2>
            <div />

            {/* <Divider light /> */}
            <ListItem>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Minggu, 19 Jan "
                labelPlacement="end"
              />
            </ListItem>
            <Divider light />
            <ListItem>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Senin, 20 Jan "
                labelPlacement="end"
              />
            </ListItem>

            <Divider light />
            <ListItem>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Selasa, 21 Jan "
                labelPlacement="end"
              />
            </ListItem>

            <Divider light />
            <ListItem>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Rabu, 22 Jan "
                labelPlacement="end"
              />
            </ListItem>

            <Divider light />
            <ListItem>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Kamis, 23 Jan "
                labelPlacement="end"
              />
            </ListItem>

            <Divider light />
            <ListItem>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Jumat, 24 Jan "
                labelPlacement="end"
              />
            </ListItem>

            <Divider light />
            <ListItem>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" labelPlacement="end" />}
                label="Sabtu, 25 Jan "
                labelPlacement="end"
              />
            </ListItem>

            <Divider light />
            <Button variant="outlined" color="secondary">
              <DeleteIcon />
              Remove
            </Button>
            <Button variant="outlined" color="primary">
              <AddIcon />
              Add
            </Button>
          </Menu>
        </div>
        <Divider light />
        <Button variant="outlined" color="secondary">
          Cancel
        </Button>

        <Button variant="outlined" color="primary">
          <Grid>Submit</Grid>
        </Button>

        <Grid item>
          <Typography variant="subtitle1">$19.00</Typography>
        </Grid>
      </Container>
    </card>
  );
}
