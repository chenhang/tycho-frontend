import React from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import SwipeableViews from 'react-swipeable-views';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import Tabs, { Tab } from 'material-ui/Tabs';
import Zoom from 'material-ui/transitions/Zoom';
import green from 'material-ui/colors/green';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import {
  LineChart,
  PieChart,
  GeoChart,
  ColumnChart,
  BarChart,
  AreaChart,
} from 'react-chartkick'


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
  },
  body: {
    fontSize: 15,
  },
}))(TableCell);
function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  flex: {
    flex: 1,
  },
  tab: {
    // maxWidth: 1000,
  }
});

class Index extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };

    return (

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Tycho Dataset Visualistion
          </Typography>
          </Toolbar>
        </AppBar>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab className={classes.tab} label="MySQL" />
            <Tab className={classes.tab} label="MongoDB" />
            <Tab className={classes.tab} label="Neo4j" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  In the first 50 years, what cities had the highest death number?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GeoChart data={[['CHICAGO', 264869], ['PHILADELPHIA', 219554], ['BOSTON', 93645], ['DETROIT', 72014], ['CLEVELAND', 67018]]} library={{ region: "US", displayMode: "text", colorAxis: { colors: ['blue'] } }} />
                <ColumnChart data={[['CHICAGO', 264869], ['PHILADELPHIA', 219554], ['BOSTON', 93645], ['DETROIT', 72014], ['CLEVELAND', 67018]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find the year with the largest amount of event "cases".
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <BarChart data={[['1920', 808450], ['1923', 551604], ['1928', 461138], ['1922', 426809], ['1918', 400813]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find total amount of event "death" per location(list 10).
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ColumnChart data={[['CHICAGO', 287812], ['PHILADELPHIA', 236522], ['BOSTON', 102418], ['DETROIT', 81828], ['CLEVELAND', 74220], ['PITTSBURGH', 73296], ['NEW ORLEANS', 70690], ['LOS ANGELES', 66339], ['WASHINGTON', 58610], ['CINCINNATI', 55906]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find cities of lowest numbers(sum(count)=1) of diphtheria.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GeoChart data={[['KEARNEY', 1], ['PORTAGE', 1], ['FOUNTAIN', 1], ['FULTON', 1], ['GRAND ISLAND', 1], ['BATAVIA', 1], ['MOUNT VERNON', 1], ['REVERE', 1], ['PORT RICHMOND', 1], ['RED WING', 1], ['SABINE PASS', 1], ['IRON MOUNTAIN', 1], ['MARIETTA', 1], ['GRAND HAVEN', 1], ['ROOSEVELT', 1], ['ARKANSAS CITY', 1], ['CLAREMONT', 1], ['ESCANABA', 1], ['MONTICELLO', 1], ['CHIPPEWA FALLS', 1]]}
                  library={{ region: "US", displayMode: "text", colorAxis: { colors: ['blue'] } }} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find the top 5 states which has most type of diseases.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GeoChart data={[['OHIO', 37], ['PENNSYLVANIA', 36], ['NEW JERSEY', 36], ['ILLINOIS', 35], ['MASSACHUSETTS', 35]]} library={{ region: "US", resolution: "provinces" }} />
                <ColumnChart data={[['OHIO', 37], ['PENNSYLVANIA', 36], ['NEW JERSEY', 36], ['ILLINOIS', 35], ['MASSACHUSETTS', 35]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Count the number of years in which the disease "smallpox" happened.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <PieChart data={[['Smallpox', 60], ['All', 116]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  In the latest decade, what disease had the highest number of death?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>Disease</CustomTableCell>
                      <CustomTableCell numeric>Count</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={classes.row} >
                      <CustomTableCell>Measles</CustomTableCell>
                      <CustomTableCell numeric>375209</CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  In the latest decade, what cities had the highest death number?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>City</CustomTableCell>
                      <CustomTableCell numeric>Count</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={classes.row} >
                      <CustomTableCell>CHICAGO</CustomTableCell>
                      <CustomTableCell numeric>45333</CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  In the first 50 years, what disease had the highest number of death?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>Disease</CustomTableCell>
                      <CustomTableCell numeric>Count</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={classes.row} >
                      <CustomTableCell>Measles</CustomTableCell>
                      <CustomTableCell numeric>3577420</CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  In the first 50 years, what cities had the highest death number?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>City</CustomTableCell>
                      <CustomTableCell numeric>Count</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={classes.row} >
                      <CustomTableCell>CHICAGO</CustomTableCell>
                      <CustomTableCell numeric>1420215</CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find the year with the largest amount of event “cases”.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>Year</CustomTableCell>
                      <CustomTableCell numeric>Count</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={classes.row} >
                      <CustomTableCell>1920</CustomTableCell>
                      <CustomTableCell numeric>808450</CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find the location with the largest amount of event “cases”.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>State</CustomTableCell>
                      <CustomTableCell>City</CustomTableCell>
                      <CustomTableCell numeric>Count</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow className={classes.row} >
                      <CustomTableCell>ILLINOIS</CustomTableCell>
                      <CustomTableCell>CHICAGO</CustomTableCell>
                      <CustomTableCell numeric>1399080</CustomTableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find total amount of event “death” per location.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GeoChart data={[['YORK', 116], ['YONKERS', 3818], ['WORCESTER', 17713], ['WOODLAWN', 15], ['WOBURN', 655], ['WINSTON-SALEM', 4790], ['WILMINGTON', 2910], ['YOUNGSTOWN', 2487], ['WEST TAMPA', 18], ['WEST SPRINGFIELD', 51], ['WEST NEWTON', 111], ['WESTFIELD', 259], ['WESTCHESTER', 3], ['WEST ALLIS', 7], ['WEBSTER', 54], ['WAUKESHA', 1], ['WATERTOWN', 145], ['WATERLOO', 59], ['WASHINGTON', 1], ['WAKEFIELD', 97]]}
                  library={{ region: "US", displayMode: "markers", resolution: "provinces" }} />
              </ExpansionPanelDetails>
            </ExpansionPanel>


          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  In the first 50 years, what disease had the highest number of death?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ColumnChart data={[['Tuberculosis', 902240], ['Pneumonia', 623257], ['Diphtheria', 134645], ['Typhoid fever', 94807], ['Influenza', 75170]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  In the first 50 years, what cities had the highest death number?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GeoChart data={[['CHICAGO', 264869], ['PHILADELPHIA', 219554], ['BOSTON', 93645], ['DETROIT', 72014], ['CLEVELAND', 67018]]} library={{ region: "US", displayMode: "markers", resolution: "provinces" }} />
                <BarChart data={[['CHICAGO', 264869], ['PHILADELPHIA', 219554], ['BOSTON', 93645], ['DETROIT', 72014], ['CLEVELAND', 67018]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find the year with the largest amount of event "cases".
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ColumnChart data={[['1920', 808450], ['1923', 551604], ['1928', 461138], ['1922', 426809], ['1918', 400813]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find total amount of event "death" per location.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <PieChart data={[['CHICAGO', 287812], ['PHILADELPHIA', 236522], ['BOSTON', 102418], ['DETROIT', 81828], ['CLEVELAND', 74220], ['PITTSBURGH', 73296], ['NEW ORLEANS', 70690], ['LOS ANGELES', 66339], ['WASHINGTON', 58610], ['CINCINNATI', 55906], ['SAN FRANCISCO', 49403], ['NEWARK', 42942], ['BUFFALO', 36374], ['MILWAUKEE', 35653], ['BROOKLYN', 31181], ['KANSAS CITY', 30860], ['DENVER', 28828], ['INDIANAPOLIS', 28207], ['MEMPHIS', 22047], ['MINNEAPOLIS', 21158], ['TOLEDO', 20364], ['NASHVILLE', 20095], ['ATLANTA', 19754], ['SAN ANTONIO', 18497], ['COLUMBUS', 18409], ['BIRMINGHAM', 18228], ['WORCESTER', 17713], ['PORTLAND', 16821], ['RICHMOND', 16547], ['LOUISVILLE', 16089], ['ROCHESTER', 15497], ['HOUSTON', 15099], ['JERSEY CITY', 14328], ['SPRINGFIELD', 13928], ['CHARLESTON', 13218], ['OMAHA', 12970], ['FALL RIVER', 12707], ['DALLAS', 12085], ['WILMINGTON', 11513], ['TRENTON', 10643], ['BRIDGEPORT', 8374], ['SACRAMENTO', 8368], ['MOBILE', 8357], ['CAMBRIDGE', 8332], ['SYRACUSE', 8256], ['GRAND RAPIDS', 8246], ['HARTFORD', 8244], ['SHREVEPORT', 8002], ['NEW HAVEN', 7758], ['LOWELL', 7617], ['SALT LAKE CITY', 7372], ['SAVANNAH', 7281], ['SEATTLE', 7231], ['READING', 6946], ['FLINT', 6525], ['OKLAHOMA CITY', 6377], ['NORFOLK', 6246], ['NEW BEDFORD', 6240], ['FORT WORTH', 6107], ['WICHITA', 6085], ['CAMDEN', 5822], ['DAYTON', 5627], ['WHEELING', 5619], ['MANCHESTER', 5590], ['LITTLE ROCK', 5352], ['COVINGTON', 5142], ['FORT WAYNE', 4818], ['LAWRENCE', 4795], ['WINSTON-SALEM', 4790], ['LEXINGTON', 4713], ['ALBUQUERQUE', 4633], ['OAKLAND', 4544], ['GALVESTON', 4395], ['TAMPA', 4073], ['ERIE', 4004], ['TERRE HAUTE', 3948], ['YONKERS', 3818], ['BINGHAMTON', 3778], ['LYNCHBURG', 3602], ['TACOMA', 3489], ['SPOKANE', 3356], ['ROANOKE', 3309], ['KNOXVILLE', 3279], ['LYNN', 3256], ['TOPEKA', 3249], ['PUEBLO', 3100], ['SOMERVILLE', 2984], ['JACKSONVILLE', 2940], ['MIAMI', 2827], ['EVANSVILLE', 2826], ['RALEIGH', 2663], ['HOBOKEN', 2651], ['HAVERHILL', 2494], ['YOUNGSTOWN', 2487], ['TAUNTON', 2369], ['ELIZABETH', 2366], ['COLUMBIA', 2302], ['SCHENECTADY', 2241], ['RACINE', 2192], ['CUMBERLAND', 2165], ['PHOENIX', 2155], ['KALAMAZOO', 2132], ['SCRANTON', 2078], ['BROCKTON', 2063], ['CONCORD', 2014], ['CHELSEA', 1948], ['PASSAIC', 1917], ['MALDEN', 1880], ['SUPERIOR', 1855], ['TROY', 1825], ['NEWPORT', 1789], ['PEORIA', 1723], ['GREAT FALLS', 1698], ['NEWTON', 1681], ['NIAGARA FALLS', 1678], ['EVERETT', 1669], ['AUBURN', 1639], ['PITTSFIELD', 1598], ['COLORADO SPRINGS', 1575], ['CHICOPEE', 1540], ['BUTTE', 1521], ['MONTGOMERY', 1491], ['GREENVILLE', 1477], ['QUINCY', 1463], ['HOLYOKE', 1452], ['HUNTINGTON', 1439], ['ELMIRA', 1434], ['DANVILLE', 1432], ['PORTSMOUTH', 1360], ['ALTOONA', 1330], ['ORANGE', 1284], ['MCKEESPORT', 1223], ['NORTH ADAMS', 1208], ['WILKES-BARRE', 1206], ['MISSOULA', 1167], ['CANTON', 1146], ['WALTHAM', 1146], ['BILLINGS', 1144], ['SAGINAW', 1142], ['PASADENA', 1124], ['NORRISTOWN', 1112], ['HARRISBURG', 1073], ['STOCKTON', 1070], ['MUNCIE', 1053], ['FITCHBURG', 1027], ['FARGO', 1026], ['PLAINFIELD', 1026], ['ROCKFORD', 1005], ['BRUNSWICK', 1004], ['LINCOLN', 992], ['MEDFORD', 977], ['ZANESVILLE', 917], ['BURLINGTON', 900], ['NORTHAMPTON', 881], ['ELGIN', 874], ['CHARLOTTE', 849], ['PETERSBURG', 821], ['KENOSHA', 820], ['NEW BRITAIN', 813], ['AUGUSTA', 779], ['SALEM', 776], ['EAST CHICAGO', 770], ['BERKELEY', 764], ['LA CROSSE', 762], ['GARY', 761], ['TUCSON', 753], ['UTICA', 714], ['LANCASTER', 710], ['MADISON', 709], ['ALTON', 700], ['NEWBURYPORT', 690], ['AUSTIN', 689], ['BOISE', 684], ['POUGHKEEPSIE', 663], ['GALESBURG', 659], ['DUNKIRK', 658], ['ANDERSON', 658], ['WOBURN', 655], ['GREENSBORO', 655], ['MOLINE', 651], ['ANN ARBOR', 637], ['BIDDEFORD', 635], ['LIMA', 633], ['SAN BERNARDINO', 632], ['MELROSE', 627], ['LONG BEACH', 625], ['WACO', 623], ['CLINTON', 622], ['BARRE', 620], ['WATERBURY', 608], ['STEELTON', 606], ['MACON', 604], ['PONTIAC', 596], ['JACKSON', 594], ['AURORA', 589], ['DUBUQUE', 584], ['LAFAYETTE', 579], ['HAMMOND', 575], ['EAST ORANGE', 565], ['MONTCLAIR', 560], ['CHATTANOOGA', 559], ['ASHTABULA', 558], ['KOKOMO', 551], ['KEARNY', 539], ['NEW LONDON', 538], ['ATLANTIC CITY', 526], ['BEAUMONT', 518], ['NASHUA', 510], ['SANTA BARBARA', 509], ['SARATOGA SPRINGS', 500], ['WATERTOWN', 496], ['MORRISTOWN', 496], ['HELENA', 491], ['ALAMEDA', 490], ['NEWBURGH', 488], ['HAMILTON', 488], ['BAYONNE', 487], ['JAMESTOWN', 483], ['COUNCIL BLUFFS', 478], ['OAK PARK', 471], ['ROCK ISLAND', 469], ['SIOUX FALLS', 468], ['RIVERSIDE', 466], ['DECATUR', 459], ['PERTH AMBOY', 456], ['SANDUSKY', 452], ['FLORENCE', 447], ['RENO', 447], ['INDEPENDENCE', 446], ['RUTLAND', 445], ['ASHLAND', 436], ['BROOKLINE', 417], ['CAIRO', 412], ['DURHAM', 411], ['GREEN BAY', 408], ['FREEPORT', 404], ['WILLIAMSPORT', 404], ['BUTLER', 398], ['WINONA', 394], ['BLOOMINGTON', 388], ['HACKENSACK', 376], ['LEWISTON', 371], ['WILKINSBURG', 362], ['MARLBOROUGH', 355], ['BATON ROUGE', 350], ['FREDERICK', 350], ['KINGSTON', 350], ['FINDLAY', 349], ['MASSILLON', 342], ['SAN JOSE', 340], ['HAMTRAMCK', 333], ['BRISTOL', 329], ['GLOUCESTER', 327], ['LACKAWANNA', 327], ['LOGANSPORT', 324], ['PENSACOLA', 319], ['MARINETTE', 318], ['AKRON', 317], ['LAKE CHARLES', 316], ['OSHKOSH', 315], ['SAN ANGELO', 307], ['ALEXANDRIA', 298], ['OTTUMWA', 293], ['CICERO', 293], ['PORT CHESTER', 291], ['NORWALK', 285], ['ALLENTOWN', 284], ['MARION', 272], ['ELKHART', 270], ['ATTLEBORO', 267], ['PEEKSKILL', 266], ['WESTFIELD', 259], ['CHILLICOTHE', 259], ['WEST NEW YORK', 254], ['ITHACA', 253], ['COHOES', 247], ['FORT SMITH', 246], ['TULSA', 245], ['POTTSTOWN', 244], ['ROCKY MOUNT', 242], ['BARBERTON', 236], ['BATTLE CREEK', 230], ['MANITOWOC', 229], ['DES MOINES', 229], ['MICHIGAN CITY', 229], ['PALMER', 228], ['IRONTON', 226], ['PARKERSBURG', 225], ['LEBANON', 223], ['MUSKEGON', 221], ['GARDNER', 219], ['ARLINGTON', 219], ['GREENWICH', 214], ['BEVERLY', 213], ['WHITE PLAINS', 210], ['NORTH TONAWANDA', 208], ['PIQUA', 206], ['PADUCAH', 203], ['OLEAN', 201], ['KEWANEE', 200], ['DAVENPORT', 194], ['AMESBURY', 192], ['HOMESTEAD', 189], ['BAKERSFIELD', 186], ['MANSFIELD', 184], ['WEYMOUTH', 183], ['HYDE PARK', 183], ['HONOLULU', 181], ['HARRISON', 179], ['FRAMINGHAM', 179], ['ONEONTA', 179], ['FRESNO', 178], ['NORWICH', 178], ['CARBONDALE', 175], ['PHILLIPSBURG', 171], ['TIFFIN', 170], ['BUCYRUS', 168], ['JANESVILLE', 164], ['LOCKPORT', 164], ['COFFEYVILLE', 163], ['LEOMINSTER', 162], ['BELOIT', 161], ['PLYMOUTH', 159], ['BRAINTREE', 159], ['IRONWOOD', 158], ['METHUEN', 157], ['MILFORD', 156], ['MERIDEN', 155], ['EUREKA', 155], ['WARREN', 153], ['CAPE GIRARDEAU', 151], ['CHEYENNE', 149], ['CORPUS CHRISTI', 149], ['GENEVA', 148], ['SANTA CRUZ', 147], ['MUSCATINE', 145], ['ENGLEWOOD', 145], ['BLUEFIELD', 144], ['SPARTANBURG', 144], ['SANFORD', 144], ['WAUSAU', 141], ['APPLETON', 141], ['GLENDALE', 138], ['WEST ORANGE', 136], ['NEW BRUNSWICK', 135], ['NANTICOKE', 134], ['GLENS FALLS', 134], ['GREENFIELD', 133], ['BERLIN', 132], ['ALLIANCE', 132], ['DOVER', 126], ['BLOOMFIELD', 124], ['CLIFTON', 122], ['SOUTHBRIDGE', 122], ['LORAIN', 121], ['MARQUETTE', 121], ['YORK', 116], ['SHEBOYGAN', 115], ['CLARKSBURG', 115], ['FOND DU LAC', 114], ['WINTHROP', 113], ['FORT SCOTT', 112], ['SANTA ANA', 112], ['HOT SPRINGS', 111], ['WEST NEWTON', 111], ['KEENE', 111], ['VALLEJO', 111], ['MASON CITY', 110], ['DEDHAM', 109], ['ALBANY', 108], ['HUDSON', 108], ['BROWNSVILLE', 104], ['EASTHAMPTON', 102], ['NEW BRIGHTON', 102], ['CHESTER', 101], ['MORGANTOWN', 100], ['BAY CITY', 100], ['LONG BRANCH', 100], ['GARFIELD', 99], ['LEAVENWORTH', 98], ['EAST CLEVELAND', 97], ['JEFFERSON CITY', 97], ['WAKEFIELD', 97], ['ANACONDA', 96], ['NORTH LITTLE ROCK', 95], ['HENDERSON', 90], ['REDLANDS', 89], ['ADAMS', 89], ['FREMONT', 89], ['BATH', 88], ['SOUTH OMAHA', 87], ['FARIBAULT', 87], ['SALISBURY', 86], ['BLUE ISLAND', 85], ['BENTON HARBOR', 85], ['SIOUX CITY', 83], ['PEABODY', 82], ['BENNINGTON', 82], ['NORTH ATTLEBORO', 79], ['MOUNDSVILLE', 79], ['ROME', 78], ['MATTOON', 78], ['ASHEVILLE', 76], ['CRAWFORDSVILLE', 76], ['ELWOOD', 76], ['HOLLAND', 74], ['KEY WEST', 74], ['SUMMIT', 72], ['NATCHEZ', 71], ['RAHWAY', 71], ['STAUNTON', 70], ['BEDFORD', 70], ['NILES', 69], ['PATERSON', 68], ['MARTINS FERRY', 68], ['DERBY', 67], ['CHICAGO HEIGHTS', 67], ['OGDEN', 67], ['ANSONIA', 67], ['BEAVER FALLS', 67], ['POTTSVILLE', 66], ['NEW CASTLE', 66], ['GREELEY', 65], ['NEW ALBANY', 65], ['VALDOSTA', 64], ['AMSTERDAM', 63], ['LITTLE FALLS', 61], ['DANVERS', 60], ['KEOKUK', 59], ['BEATRICE', 59], ['WATERLOO', 59], ['NEWPORT NEWS', 58], ['FORT DODGE', 55], ['ISHPEMING', 54], ['WEBSTER', 54], ['MANKATO', 53], ['CARLISLE', 53], ['FAIRFIELD', 52], ['SAUGUS', 51], ['HORNELL', 51], ['ASBURY PARK', 51], ['PARSONS', 51], ['WEST SPRINGFIELD', 51], ['WEST BAY CITY', 51], ['SHAMOKIN', 50], ['KANKAKEE', 49], ['AMARILLO', 49], ['LUDINGTON', 48], ['BRAZIL', 48], ['TITUSVILLE', 47], ['FRANKFORT', 47], ['CADILLAC', 47], ['BELMONT', 46], ['CORTLAND', 46], ['CHARLOTTESVILLE', 46], ['NATICK', 45], ['ANNISTON', 44], ['URBANA', 43], ['CEDAR RAPIDS', 43], ['LAUREL', 42], ['MONMOUTH', 41], ['GASTONIA', 41], ['PITTSTON', 40], ['MONROE', 40], ['POCATELLO', 38], ['NEBRASKA CITY', 36], ['TRAVERSE CITY', 36], ['STONINGTON', 35], ['MARTINSBURG', 35], ['EAST LIVERPOOL', 32], ['GRANITE CITY', 31], ['PALESTINE', 31], ['SENECA FALLS', 31], ['JOHNSTOWN', 31], ['MUSKOGEE', 31], ['CHANUTE', 30], ['JOPLIN', 30], ['WINCHESTER', 30], ['EMPORIA', 29], ['ALPENA', 29], ['BELLAIRE', 28], ['BANGOR', 27], ['ELYRIA', 26], ['RYE', 26], ['CLEVELAND HEIGHTS', 26], ['VIRGINIA CITY', 26], ['BILOXI', 25], ['WATERVLIET', 25], ['PROVO', 25], ['BOULDER', 25], ['NAUGATUCK', 24], ['NORTHBRIDGE', 24], ['STERLING', 24], ['OSSINING', 23], ['STEUBENVILLE', 23], ['POMONA', 22], ['CASPER', 22], ['WEST CHESTER', 22], ['PUTNAM', 21], ['BRADFORD', 21], ['SHENANDOAH', 21], ['NORWOOD', 20], ['ABILENE', 20], ['TUSCALOOSA', 20], ['HANNIBAL', 20], ['CORSICANA', 20], ['LANSINGBURGH', 20], ['GRAND FORKS', 19], ['EASTON', 19], ['ADRIAN', 19], ['MINOT', 19], ['MANISTEE', 19], ['LAPORTE', 18], ['WEST TAMPA', 18], ['IOWA CITY', 17], ['DUBOIS', 17], ['BELLINGHAM', 17], ['WALLA WALLA', 17], ['FAIRMONT', 17], ['PITTSBURG', 16], ['MAHANOY CITY', 16], ['WALLINGFORD', 16], ['ATCHISON', 16], ['STREATOR', 16], ['ASTORIA', 16], ['CENTRALIA', 15], ['MARSHALLTOWN', 15], ['WOODLAWN', 15], ['MENOMINEE', 15], ['PEKIN', 15], ['TRINIDAD', 15], ['JOLIET', 14], ['EVANSTON', 14], ['BELLEVILLE', 14], ['PARKLAND', 13], ['HANCOCK', 13], ['CHAMPAIGN', 13], ['HUTCHINSON', 12], ['WILLIMANTIC', 11], ['ESCANABA', 11], ['WICHITA FALLS', 11], ['ABERDEEN', 11], ['SHELBYVILLE', 10], ['VINCENNES', 10], ['GRAND HAVEN', 9], ['CLAREMONT', 9], ['DOTHAN', 9], ['HAZLETON', 9], ['YAKIMA', 9], ['EAU CLAIRE', 9], ['WEST WARWICK', 9], ['LAS VEGAS', 8], ['IRON MOUNTAIN', 8], ['PORTAGE', 8], ['FRANKLIN', 8], ['DUNMORE', 8], ['WEST ALLIS', 7], ['PORT ARTHUR', 7], ['HERKIMER', 7], ['HATTIESBURG', 7], ['CHIPPEWA FALLS', 6], ['REVERE', 6], ['MOUNT VERNON', 6], ['BEACON', 6], ['TONAWANDA', 6], ['MARIETTA', 6], ['CUYAHOGA FALLS', 6], ['MCALESTER', 6], ['GLOVERSVILLE', 5], ['IRVINGTON', 5], ['FULTON', 5], ['PORT RICHMOND', 5], ['OSWEGO', 5], ['VICKSBURG', 5], ['ROOSEVELT', 5], ['SALINA', 5], ['SABINE PASS', 5], ['EUGENE', 5], ['COLLEGE POINT', 4], ['DANBURY', 4], ['JOHNSON CITY', 4], ['MURPHYSBORO', 4], ['HIGH POINT', 4], ['VINEYARD HAVEN', 4], ['LA GRANGE', 4], ['ATHENS', 4], ['FOSTORIA', 4], ['KENMORE', 4], ['NOGALES', 3], ['WESTCHESTER', 3], ['BERWYN', 3], ['SHARON', 3], ['TYLER', 3], ['STAMFORD', 3], ['RED WING', 3], ['LANSING', 3], ['PASCAGOULA', 3], ['SHAWNEE', 3], ['MAYVILLE', 3], ['LAREDO', 3], ['PARIS', 3], ['MCKEES ROCKS', 3], ['OWENSBORO', 3], ['VICTORIA', 3], ['ENID', 2], ['PALO ALTO', 2], ['ZANESFIELD', 2], ['CORNING', 2], ['IOLA', 2], ['NORTH WEYMOUTH', 2], ['GRAND ISLAND', 2], ['STILLWATER', 2], ['MARLBORO', 2], ['HOQUIAM', 2], ['ARKANSAS CITY', 2], ['ST JOHNSBURY', 2], ['MEADVILLE', 2], ['ROCKLAND', 1], ['NORTON', 1], ['MONESSEN', 1], ['WAUKESHA', 1], ['CARTHAGE', 1], ['HERRIN', 1], ['GADSDEN', 1], ['CADDO', 1], ['ENFIELD', 1], ['EAST WEYMOUTH', 1], ['MERIDIAN', 1], ['WAYCROSS', 1], ['ROCK SPRINGS', 1], ['NEW ROCHELLE', 1], ['GARDINER', 1], ['PERU', 1], ['SEDALIA', 1], ['PORT TOWNSEND', 1], ['ONEIDA', 1], ['GULFPORT', 1], ['WOODVILLE', 1], ['SOUTH RANGE', 1], ['GALENA', 1], ['BATAVIA', 1], ['NEW PHILADELPHIA', 1], ['MOUNT HOLLY', 1], ['MONTPELIER', 1], ['CHICKASHA', 1], ['BESSEMER', 1], ['BRENHAM', 1], ['ANDOVER', 1], ['WELLINGTON', 0], ['ROCK', 0]]} />
                <GeoChart data={[['CHICAGO', 287812], ['PHILADELPHIA', 236522], ['BOSTON', 102418], ['DETROIT', 81828], ['CLEVELAND', 74220], ['PITTSBURGH', 73296], ['NEW ORLEANS', 70690], ['LOS ANGELES', 66339], ['WASHINGTON', 58610], ['CINCINNATI', 55906], ['SAN FRANCISCO', 49403], ['NEWARK', 42942], ['BUFFALO', 36374], ['MILWAUKEE', 35653], ['BROOKLYN', 31181], ['KANSAS CITY', 30860], ['DENVER', 28828], ['INDIANAPOLIS', 28207], ['MEMPHIS', 22047], ['MINNEAPOLIS', 21158], ['TOLEDO', 20364], ['NASHVILLE', 20095], ['ATLANTA', 19754], ['SAN ANTONIO', 18497], ['COLUMBUS', 18409], ['BIRMINGHAM', 18228], ['WORCESTER', 17713], ['PORTLAND', 16821], ['RICHMOND', 16547], ['LOUISVILLE', 16089], ['ROCHESTER', 15497], ['HOUSTON', 15099], ['JERSEY CITY', 14328], ['SPRINGFIELD', 13928], ['CHARLESTON', 13218], ['OMAHA', 12970], ['FALL RIVER', 12707], ['DALLAS', 12085], ['WILMINGTON', 11513], ['TRENTON', 10643], ['BRIDGEPORT', 8374], ['SACRAMENTO', 8368], ['MOBILE', 8357], ['CAMBRIDGE', 8332], ['SYRACUSE', 8256], ['GRAND RAPIDS', 8246], ['HARTFORD', 8244], ['SHREVEPORT', 8002], ['NEW HAVEN', 7758], ['LOWELL', 7617], ['SALT LAKE CITY', 7372], ['SAVANNAH', 7281], ['SEATTLE', 7231], ['READING', 6946], ['FLINT', 6525], ['OKLAHOMA CITY', 6377], ['NORFOLK', 6246], ['NEW BEDFORD', 6240], ['FORT WORTH', 6107], ['WICHITA', 6085], ['CAMDEN', 5822], ['DAYTON', 5627], ['WHEELING', 5619], ['MANCHESTER', 5590], ['LITTLE ROCK', 5352], ['COVINGTON', 5142], ['FORT WAYNE', 4818], ['LAWRENCE', 4795], ['WINSTON-SALEM', 4790], ['LEXINGTON', 4713], ['ALBUQUERQUE', 4633], ['OAKLAND', 4544], ['GALVESTON', 4395], ['TAMPA', 4073], ['ERIE', 4004], ['TERRE HAUTE', 3948], ['YONKERS', 3818], ['BINGHAMTON', 3778], ['LYNCHBURG', 3602], ['TACOMA', 3489], ['SPOKANE', 3356], ['ROANOKE', 3309], ['KNOXVILLE', 3279], ['LYNN', 3256], ['TOPEKA', 3249], ['PUEBLO', 3100], ['SOMERVILLE', 2984], ['JACKSONVILLE', 2940], ['MIAMI', 2827], ['EVANSVILLE', 2826], ['RALEIGH', 2663], ['HOBOKEN', 2651], ['HAVERHILL', 2494], ['YOUNGSTOWN', 2487], ['TAUNTON', 2369], ['ELIZABETH', 2366], ['COLUMBIA', 2302], ['SCHENECTADY', 2241], ['RACINE', 2192], ['CUMBERLAND', 2165], ['PHOENIX', 2155], ['KALAMAZOO', 2132], ['SCRANTON', 2078], ['BROCKTON', 2063], ['CONCORD', 2014], ['CHELSEA', 1948], ['PASSAIC', 1917], ['MALDEN', 1880], ['SUPERIOR', 1855], ['TROY', 1825], ['NEWPORT', 1789], ['PEORIA', 1723], ['GREAT FALLS', 1698], ['NEWTON', 1681], ['NIAGARA FALLS', 1678], ['EVERETT', 1669], ['AUBURN', 1639], ['PITTSFIELD', 1598], ['COLORADO SPRINGS', 1575], ['CHICOPEE', 1540], ['BUTTE', 1521], ['MONTGOMERY', 1491], ['GREENVILLE', 1477], ['QUINCY', 1463], ['HOLYOKE', 1452], ['HUNTINGTON', 1439], ['ELMIRA', 1434], ['DANVILLE', 1432], ['PORTSMOUTH', 1360], ['ALTOONA', 1330], ['ORANGE', 1284], ['MCKEESPORT', 1223], ['NORTH ADAMS', 1208], ['WILKES-BARRE', 1206], ['MISSOULA', 1167], ['CANTON', 1146], ['WALTHAM', 1146], ['BILLINGS', 1144], ['SAGINAW', 1142], ['PASADENA', 1124], ['NORRISTOWN', 1112], ['HARRISBURG', 1073], ['STOCKTON', 1070], ['MUNCIE', 1053], ['FITCHBURG', 1027], ['FARGO', 1026], ['PLAINFIELD', 1026], ['ROCKFORD', 1005], ['BRUNSWICK', 1004], ['LINCOLN', 992], ['MEDFORD', 977], ['ZANESVILLE', 917], ['BURLINGTON', 900], ['NORTHAMPTON', 881], ['ELGIN', 874], ['CHARLOTTE', 849], ['PETERSBURG', 821], ['KENOSHA', 820], ['NEW BRITAIN', 813], ['AUGUSTA', 779], ['SALEM', 776], ['EAST CHICAGO', 770], ['BERKELEY', 764], ['LA CROSSE', 762], ['GARY', 761], ['TUCSON', 753], ['UTICA', 714], ['LANCASTER', 710], ['MADISON', 709], ['ALTON', 700], ['NEWBURYPORT', 690], ['AUSTIN', 689], ['BOISE', 684], ['POUGHKEEPSIE', 663], ['GALESBURG', 659], ['DUNKIRK', 658], ['ANDERSON', 658], ['WOBURN', 655], ['GREENSBORO', 655], ['MOLINE', 651], ['ANN ARBOR', 637], ['BIDDEFORD', 635], ['LIMA', 633], ['SAN BERNARDINO', 632], ['MELROSE', 627], ['LONG BEACH', 625], ['WACO', 623], ['CLINTON', 622], ['BARRE', 620], ['WATERBURY', 608], ['STEELTON', 606], ['MACON', 604], ['PONTIAC', 596], ['JACKSON', 594], ['AURORA', 589], ['DUBUQUE', 584], ['LAFAYETTE', 579], ['HAMMOND', 575], ['EAST ORANGE', 565], ['MONTCLAIR', 560], ['CHATTANOOGA', 559], ['ASHTABULA', 558], ['KOKOMO', 551], ['KEARNY', 539], ['NEW LONDON', 538], ['ATLANTIC CITY', 526], ['BEAUMONT', 518], ['NASHUA', 510], ['SANTA BARBARA', 509], ['SARATOGA SPRINGS', 500], ['WATERTOWN', 496], ['MORRISTOWN', 496], ['HELENA', 491], ['ALAMEDA', 490], ['NEWBURGH', 488], ['HAMILTON', 488], ['BAYONNE', 487], ['JAMESTOWN', 483], ['COUNCIL BLUFFS', 478], ['OAK PARK', 471], ['ROCK ISLAND', 469], ['SIOUX FALLS', 468], ['RIVERSIDE', 466], ['DECATUR', 459], ['PERTH AMBOY', 456], ['SANDUSKY', 452], ['FLORENCE', 447], ['RENO', 447], ['INDEPENDENCE', 446], ['RUTLAND', 445], ['ASHLAND', 436], ['BROOKLINE', 417], ['CAIRO', 412], ['DURHAM', 411], ['GREEN BAY', 408], ['FREEPORT', 404], ['WILLIAMSPORT', 404], ['BUTLER', 398], ['WINONA', 394], ['BLOOMINGTON', 388], ['HACKENSACK', 376], ['LEWISTON', 371], ['WILKINSBURG', 362], ['MARLBOROUGH', 355], ['BATON ROUGE', 350], ['FREDERICK', 350], ['KINGSTON', 350], ['FINDLAY', 349], ['MASSILLON', 342], ['SAN JOSE', 340], ['HAMTRAMCK', 333], ['BRISTOL', 329], ['GLOUCESTER', 327], ['LACKAWANNA', 327], ['LOGANSPORT', 324], ['PENSACOLA', 319], ['MARINETTE', 318], ['AKRON', 317], ['LAKE CHARLES', 316], ['OSHKOSH', 315], ['SAN ANGELO', 307], ['ALEXANDRIA', 298], ['OTTUMWA', 293], ['CICERO', 293], ['PORT CHESTER', 291], ['NORWALK', 285], ['ALLENTOWN', 284], ['MARION', 272], ['ELKHART', 270], ['ATTLEBORO', 267], ['PEEKSKILL', 266], ['WESTFIELD', 259], ['CHILLICOTHE', 259], ['WEST NEW YORK', 254], ['ITHACA', 253], ['COHOES', 247], ['FORT SMITH', 246], ['TULSA', 245], ['POTTSTOWN', 244], ['ROCKY MOUNT', 242], ['BARBERTON', 236], ['BATTLE CREEK', 230], ['MANITOWOC', 229], ['DES MOINES', 229], ['MICHIGAN CITY', 229], ['PALMER', 228], ['IRONTON', 226], ['PARKERSBURG', 225], ['LEBANON', 223], ['MUSKEGON', 221], ['GARDNER', 219], ['ARLINGTON', 219], ['GREENWICH', 214], ['BEVERLY', 213], ['WHITE PLAINS', 210], ['NORTH TONAWANDA', 208], ['PIQUA', 206], ['PADUCAH', 203], ['OLEAN', 201], ['KEWANEE', 200], ['DAVENPORT', 194], ['AMESBURY', 192], ['HOMESTEAD', 189], ['BAKERSFIELD', 186], ['MANSFIELD', 184], ['WEYMOUTH', 183], ['HYDE PARK', 183], ['HONOLULU', 181], ['HARRISON', 179], ['FRAMINGHAM', 179], ['ONEONTA', 179], ['FRESNO', 178], ['NORWICH', 178], ['CARBONDALE', 175], ['PHILLIPSBURG', 171], ['TIFFIN', 170], ['BUCYRUS', 168], ['JANESVILLE', 164], ['LOCKPORT', 164], ['COFFEYVILLE', 163], ['LEOMINSTER', 162], ['BELOIT', 161], ['PLYMOUTH', 159], ['BRAINTREE', 159], ['IRONWOOD', 158], ['METHUEN', 157], ['MILFORD', 156], ['MERIDEN', 155], ['EUREKA', 155], ['WARREN', 153], ['CAPE GIRARDEAU', 151], ['CHEYENNE', 149], ['CORPUS CHRISTI', 149], ['GENEVA', 148], ['SANTA CRUZ', 147], ['MUSCATINE', 145], ['ENGLEWOOD', 145], ['BLUEFIELD', 144], ['SPARTANBURG', 144], ['SANFORD', 144], ['WAUSAU', 141], ['APPLETON', 141], ['GLENDALE', 138], ['WEST ORANGE', 136], ['NEW BRUNSWICK', 135], ['NANTICOKE', 134], ['GLENS FALLS', 134], ['GREENFIELD', 133], ['BERLIN', 132], ['ALLIANCE', 132], ['DOVER', 126], ['BLOOMFIELD', 124], ['CLIFTON', 122], ['SOUTHBRIDGE', 122], ['LORAIN', 121], ['MARQUETTE', 121], ['YORK', 116], ['SHEBOYGAN', 115], ['CLARKSBURG', 115], ['FOND DU LAC', 114], ['WINTHROP', 113], ['FORT SCOTT', 112], ['SANTA ANA', 112], ['HOT SPRINGS', 111], ['WEST NEWTON', 111], ['KEENE', 111], ['VALLEJO', 111], ['MASON CITY', 110], ['DEDHAM', 109], ['ALBANY', 108], ['HUDSON', 108], ['BROWNSVILLE', 104], ['EASTHAMPTON', 102], ['NEW BRIGHTON', 102], ['CHESTER', 101], ['MORGANTOWN', 100], ['BAY CITY', 100], ['LONG BRANCH', 100], ['GARFIELD', 99], ['LEAVENWORTH', 98], ['EAST CLEVELAND', 97], ['JEFFERSON CITY', 97], ['WAKEFIELD', 97], ['ANACONDA', 96], ['NORTH LITTLE ROCK', 95], ['HENDERSON', 90], ['REDLANDS', 89], ['ADAMS', 89], ['FREMONT', 89], ['BATH', 88], ['SOUTH OMAHA', 87], ['FARIBAULT', 87], ['SALISBURY', 86], ['BLUE ISLAND', 85], ['BENTON HARBOR', 85], ['SIOUX CITY', 83], ['PEABODY', 82], ['BENNINGTON', 82], ['NORTH ATTLEBORO', 79], ['MOUNDSVILLE', 79], ['ROME', 78], ['MATTOON', 78], ['ASHEVILLE', 76], ['CRAWFORDSVILLE', 76], ['ELWOOD', 76], ['HOLLAND', 74], ['KEY WEST', 74], ['SUMMIT', 72], ['NATCHEZ', 71], ['RAHWAY', 71], ['STAUNTON', 70], ['BEDFORD', 70], ['NILES', 69], ['PATERSON', 68], ['MARTINS FERRY', 68], ['DERBY', 67], ['CHICAGO HEIGHTS', 67], ['OGDEN', 67], ['ANSONIA', 67], ['BEAVER FALLS', 67], ['POTTSVILLE', 66], ['NEW CASTLE', 66], ['GREELEY', 65], ['NEW ALBANY', 65], ['VALDOSTA', 64], ['AMSTERDAM', 63], ['LITTLE FALLS', 61], ['DANVERS', 60], ['KEOKUK', 59], ['BEATRICE', 59], ['WATERLOO', 59], ['NEWPORT NEWS', 58], ['FORT DODGE', 55], ['ISHPEMING', 54], ['WEBSTER', 54], ['MANKATO', 53], ['CARLISLE', 53], ['FAIRFIELD', 52], ['SAUGUS', 51], ['HORNELL', 51], ['ASBURY PARK', 51], ['PARSONS', 51], ['WEST SPRINGFIELD', 51], ['WEST BAY CITY', 51], ['SHAMOKIN', 50], ['KANKAKEE', 49], ['AMARILLO', 49], ['LUDINGTON', 48], ['BRAZIL', 48], ['TITUSVILLE', 47], ['FRANKFORT', 47], ['CADILLAC', 47], ['BELMONT', 46], ['CORTLAND', 46], ['CHARLOTTESVILLE', 46], ['NATICK', 45], ['ANNISTON', 44], ['URBANA', 43], ['CEDAR RAPIDS', 43], ['LAUREL', 42], ['MONMOUTH', 41], ['GASTONIA', 41], ['PITTSTON', 40], ['MONROE', 40], ['POCATELLO', 38], ['NEBRASKA CITY', 36], ['TRAVERSE CITY', 36], ['STONINGTON', 35], ['MARTINSBURG', 35], ['EAST LIVERPOOL', 32], ['GRANITE CITY', 31], ['PALESTINE', 31], ['SENECA FALLS', 31], ['JOHNSTOWN', 31], ['MUSKOGEE', 31], ['CHANUTE', 30], ['JOPLIN', 30], ['WINCHESTER', 30], ['EMPORIA', 29], ['ALPENA', 29], ['BELLAIRE', 28], ['BANGOR', 27], ['ELYRIA', 26], ['RYE', 26], ['CLEVELAND HEIGHTS', 26], ['VIRGINIA CITY', 26], ['BILOXI', 25], ['WATERVLIET', 25], ['PROVO', 25], ['BOULDER', 25], ['NAUGATUCK', 24], ['NORTHBRIDGE', 24], ['STERLING', 24], ['OSSINING', 23], ['STEUBENVILLE', 23], ['POMONA', 22], ['CASPER', 22], ['WEST CHESTER', 22], ['PUTNAM', 21], ['BRADFORD', 21], ['SHENANDOAH', 21], ['NORWOOD', 20], ['ABILENE', 20], ['TUSCALOOSA', 20], ['HANNIBAL', 20], ['CORSICANA', 20], ['LANSINGBURGH', 20], ['GRAND FORKS', 19], ['EASTON', 19], ['ADRIAN', 19], ['MINOT', 19], ['MANISTEE', 19], ['LAPORTE', 18], ['WEST TAMPA', 18], ['IOWA CITY', 17], ['DUBOIS', 17], ['BELLINGHAM', 17], ['WALLA WALLA', 17], ['FAIRMONT', 17], ['PITTSBURG', 16], ['MAHANOY CITY', 16], ['WALLINGFORD', 16], ['ATCHISON', 16], ['STREATOR', 16], ['ASTORIA', 16], ['CENTRALIA', 15], ['MARSHALLTOWN', 15], ['WOODLAWN', 15], ['MENOMINEE', 15], ['PEKIN', 15], ['TRINIDAD', 15], ['JOLIET', 14], ['EVANSTON', 14], ['BELLEVILLE', 14], ['PARKLAND', 13], ['HANCOCK', 13], ['CHAMPAIGN', 13], ['HUTCHINSON', 12], ['WILLIMANTIC', 11], ['ESCANABA', 11], ['WICHITA FALLS', 11], ['ABERDEEN', 11], ['SHELBYVILLE', 10], ['VINCENNES', 10], ['GRAND HAVEN', 9], ['CLAREMONT', 9], ['DOTHAN', 9], ['HAZLETON', 9], ['YAKIMA', 9], ['EAU CLAIRE', 9], ['WEST WARWICK', 9], ['LAS VEGAS', 8], ['IRON MOUNTAIN', 8], ['PORTAGE', 8], ['FRANKLIN', 8], ['DUNMORE', 8], ['WEST ALLIS', 7], ['PORT ARTHUR', 7], ['HERKIMER', 7], ['HATTIESBURG', 7], ['CHIPPEWA FALLS', 6], ['REVERE', 6], ['MOUNT VERNON', 6], ['BEACON', 6], ['TONAWANDA', 6], ['MARIETTA', 6], ['CUYAHOGA FALLS', 6], ['MCALESTER', 6], ['GLOVERSVILLE', 5], ['IRVINGTON', 5], ['FULTON', 5], ['PORT RICHMOND', 5], ['OSWEGO', 5], ['VICKSBURG', 5], ['ROOSEVELT', 5], ['SALINA', 5], ['SABINE PASS', 5], ['EUGENE', 5], ['COLLEGE POINT', 4], ['DANBURY', 4], ['JOHNSON CITY', 4], ['MURPHYSBORO', 4], ['HIGH POINT', 4], ['VINEYARD HAVEN', 4], ['LA GRANGE', 4], ['ATHENS', 4], ['FOSTORIA', 4], ['KENMORE', 4], ['NOGALES', 3], ['WESTCHESTER', 3], ['BERWYN', 3], ['SHARON', 3], ['TYLER', 3], ['STAMFORD', 3], ['RED WING', 3], ['LANSING', 3], ['PASCAGOULA', 3], ['SHAWNEE', 3], ['MAYVILLE', 3], ['LAREDO', 3], ['PARIS', 3], ['MCKEES ROCKS', 3], ['OWENSBORO', 3], ['VICTORIA', 3], ['ENID', 2], ['PALO ALTO', 2], ['ZANESFIELD', 2], ['CORNING', 2], ['IOLA', 2], ['NORTH WEYMOUTH', 2], ['GRAND ISLAND', 2], ['STILLWATER', 2], ['MARLBORO', 2], ['HOQUIAM', 2], ['ARKANSAS CITY', 2], ['ST JOHNSBURY', 2], ['MEADVILLE', 2], ['ROCKLAND', 1], ['NORTON', 1], ['MONESSEN', 1], ['WAUKESHA', 1], ['CARTHAGE', 1], ['HERRIN', 1], ['GADSDEN', 1], ['CADDO', 1], ['ENFIELD', 1], ['EAST WEYMOUTH', 1], ['MERIDIAN', 1], ['WAYCROSS', 1], ['ROCK SPRINGS', 1], ['NEW ROCHELLE', 1], ['GARDINER', 1], ['PERU', 1], ['SEDALIA', 1], ['PORT TOWNSEND', 1], ['ONEIDA', 1], ['GULFPORT', 1], ['WOODVILLE', 1], ['SOUTH RANGE', 1], ['GALENA', 1], ['BATAVIA', 1], ['NEW PHILADELPHIA', 1], ['MOUNT HOLLY', 1], ['MONTPELIER', 1], ['CHICKASHA', 1], ['BESSEMER', 1], ['BRENHAM', 1], ['ANDOVER', 1], ['WELLINGTON', 0], ['ROCK', 0]]}
                  library={{ region: "US", displayMode: "markers", resolution: "provinces" }} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find 5 cities of lowest numbers of diphtheria.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GeoChart data={[['GRAND HAVEN', 1], ['CHIPPEWA FALLS', 1], ['MONTICELLO', 1], ['CLAREMONT', 1], ['REVERE', 1]]}
                  library={{ region: "US", displayMode: "text", colorAxis: { colors: ['blue'] } }} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Count the number of cases whose name of disease contains "fever"
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <PieChart donut={true} data={[['Yellow fever', 1], ['Typhoid and paratyphoid fevers', 3923], ['Scarlet fever', 1896396], ['Rocky Mountain spotted fever', 54], ['Typhoid fever', 258318]]} />
                <BarChart data={[['Yellow fever', 1], ['Typhoid and paratyphoid fevers', 3923], ['Scarlet fever', 1896396], ['Rocky Mountain spotted fever', 54], ['Typhoid fever', 258318]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Find the state which has most type of diseases.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <GeoChart data={[['OHIO', 37], ['PENNSYLVANIA', 36], ['NEW JERSEY', 36], ['MASSACHUSETTS', 35], ['ILLINOIS', 35], ['NEW YORK', 35], ['MICHIGAN', 33], ['DISTRICT OF COLUMBIA', 33], ['CONNECTICUT', 32], ['CALIFORNIA', 32], ['WISCONSIN', 32], ['LOUISIANA', 31], ['INDIANA', 31], ['WASHINGTON', 30], ['TEXAS', 30], ['TENNESSEE', 29], ['KANSAS', 29], ['MINNESOTA', 29], ['ALABAMA', 29], ['VIRGINIA', 29], ['MISSOURI', 28], ['GEORGIA', 28], ['COLORADO', 28], ['KENTUCKY', 28], ['NORTH CAROLINA', 27], ['OREGON', 27], ['FLORIDA', 27], ['IOWA', 27], ['WEST VIRGINIA', 26], ['UTAH', 26], ['NEBRASKA', 26], ['ARKANSAS', 26], ['MAINE', 26], ['OKLAHOMA', 26], ['SOUTH CAROLINA', 26], ['DELAWARE', 25], ['NEW MEXICO', 24], ['NEW HAMPSHIRE', 23], ['MONTANA', 22], ['VERMONT', 22], ['MARYLAND', 22], ['ARIZONA', 22], ['NORTH DAKOTA', 21], ['NEVADA', 20], ['IDAHO', 20], ['SOUTH DAKOTA', 19], ['RHODE ISLAND', 12], ['MISSISSIPPI', 12], ['HAWAII', 12], ['WYOMING', 10], ['ALASKA', 3]]} library={{ region: "US", resolution: "provinces" }} />
                <PieChart donut={true} data={[['OHIO', 37], ['PENNSYLVANIA', 36], ['NEW JERSEY', 36], ['MASSACHUSETTS', 35], ['ILLINOIS', 35], ['NEW YORK', 35], ['MICHIGAN', 33], ['DISTRICT OF COLUMBIA', 33], ['CONNECTICUT', 32], ['CALIFORNIA', 32], ['WISCONSIN', 32], ['LOUISIANA', 31], ['INDIANA', 31], ['WASHINGTON', 30], ['TEXAS', 30], ['TENNESSEE', 29], ['KANSAS', 29], ['MINNESOTA', 29], ['ALABAMA', 29], ['VIRGINIA', 29], ['MISSOURI', 28], ['GEORGIA', 28], ['COLORADO', 28], ['KENTUCKY', 28], ['NORTH CAROLINA', 27], ['OREGON', 27], ['FLORIDA', 27], ['IOWA', 27], ['WEST VIRGINIA', 26], ['UTAH', 26], ['NEBRASKA', 26], ['ARKANSAS', 26], ['MAINE', 26], ['OKLAHOMA', 26], ['SOUTH CAROLINA', 26], ['DELAWARE', 25], ['NEW MEXICO', 24], ['NEW HAMPSHIRE', 23], ['MONTANA', 22], ['VERMONT', 22], ['MARYLAND', 22], ['ARIZONA', 22], ['NORTH DAKOTA', 21], ['NEVADA', 20], ['IDAHO', 20], ['SOUTH DAKOTA', 19], ['RHODE ISLAND', 12], ['MISSISSIPPI', 12], ['HAWAII', 12], ['WYOMING', 10], ['ALASKA', 3]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Count the number of years in which the disease “smallpox” happened.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <PieChart data={[['Smallpox', 60], ['All', 116]]} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Index);
