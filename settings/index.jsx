function mySettings(props) {
  return (
    <Page>
     <Text>
        Choose your departure and arrival stations
      </Text>
      <Section
        title={<Text bold align="center">Departure Station</Text>}>
       
        <TextInput
          title="Departure Station"
          placeholder="Find a Station"
          settingsKey="departureStation"
          onAutocomplete={(value) => {
            const autoValues = [
              {name:"30th Street Station",value:"30th Street Station"},
              {name:"49th St",value:"49th St"},
              {name:"Airport Terminal A",value:"Airport Terminal A"},
              {name:"Airport Terminal B",value:"Airport Terminal B"},
              {name:"Airport Terminal C-D",value:"Airport Terminal C-D"},
              {name:"Airport Terminal E-F",value:"Airport Terminal E-F"},
              {name:"Allegheny",value:"Allegheny"},
              {name:"Allen Lane",value:"Allen Lane"},
              {name:"Ambler",value:"Ambler"},
              {name:"Angora",value:"Angora"},
              {name:"Ardmore",value:"Ardmore"},
              {name:"Ardsley",value:"Ardsley"},
              {name:"Bala",value:"Bala"},
              {name:"Berwyn",value:"Berwyn"},
              {name:"Bethayres",value:"Bethayres"},
              {name:"Bridesburg",value:"Bridesburg"},
              {name:"Bristol",value:"Bristol"},
              {name:"Bryn Mawr",value:"Bryn Mawr"},
              {name:"Carpenter",value:"Carpenter"},
              {name:"Chalfont",value:"Chalfont"},
              {name:"Chelten Avenue",value:"Chelten Avenue"},
              {name:"Cheltenham",value:"Cheltenham"},
              {name:"Chester TC",value:"Chester TC"},
              {name:"Chestnut Hill East",value:"Chestnut Hill East"},
              {name:"Chestnut Hill West",value:"Chestnut Hill West"},
              {name:"Churchmans Crossing",value:"Churchmans Crossing"},
              {name:"Claymont",value:"Claymont"},
              {name:"Clifton-Aldan",value:"Clifton-Aldan"},
              {name:"Colmar",value:"Colmar"},
              {name:"Conshohocken",value:"Conshohocken"},
              {name:"Cornwells Heights",value:"Cornwells Heights"},
              {name:"Crestmont",value:"Crestmont"},
              {name:"Croydon",value:"Croydon"},
              {name:"Crum Lynne",value:"Crum Lynne"},
              {name:"Curtis Park",value:"Curtis Park"},
              {name:"Cynwyd",value:"Cynwyd"},
              {name:"Darby",value:"Darby"},
              {name:"Daylesford",value:"Daylesford"},
              {name:"Delaware Valley College",value:"Delaware Valley College"},
              {name:"Devon",value:"Devon"},
              {name:"Downingtown",value:"Downingtown"},
              {name:"Doylestown",value:"Doylestown"},
              {name:"East Falls",value:"East Falls"},
              {name:"Eastwick Station",value:"Eastwick Station"},
              {name:"Eddington",value:"Eddington"},
              {name:"Eddystone",value:"Eddystone"},
              {name:"Elkins Park",value:"Elkins Park"},
              {name:"Elm St",value:"Elm St"},
              {name:"Elwyn Station",value:"Elwyn Station"},
              {name:"Exton",value:"Exton"},
              {name:"Fern Rock TC",value:"Fern Rock TC"},
              {name:"Fernwood",value:"Fernwood"},
              {name:"Folcroft",value:"Folcroft"},
              {name:"Forest Hills",value:"Forest Hills"},
              {name:"Ft Washington",value:"Ft Washington"},
              {name:"Fortuna",value:"Fortuna"},
              {name:"Fox Chase",value:"Fox Chase"},
              {name:"Germantown",value:"Germantown"},
              {name:"Gladstone",value:"Gladstone"},
              {name:"Glenolden",value:"Glenolden"},
              {name:"Glenside",value:"Glenside"},
              {name:"Gravers",value:"Gravers"},
              {name:"Gwynedd Valley",value:"Gwynedd Valley"},
              {name:"Hatboro",value:"Hatboro"},
              {name:"Haverford",value:"Haverford"},
              {name:"Highland Ave",value:"Highland Ave"},
              {name:"Highland",value:"Highland"},
              {name:"Holmesburg Jct",value:"Holmesburg Jct"},
              {name:"Ivy Ridge",value:"Ivy Ridge"},
              {name:"Jenkintown-Wyncote",value:"Jenkintown-Wyncote"},
              {name:"Langhorne",value:"Langhorne"},
              {name:"Lansdale",value:"Lansdale"},
              {name:"Lansdowne",value:"Lansdowne"},
              {name:"Lawndale",value:"Lawndale"},
              {name:"Levittown",value:"Levittown"},
              {name:"Link Belt",value:"Link Belt"},
              {name:"Main St",value:"Main St"},
              {name:"Malvern",value:"Malvern"},
              {name:"Manayunk",value:"Manayunk"},
              {name:"Marcus Hook",value:"Marcus Hook"},
              {name:"Market East",value:"Market East"},
              {name:"Meadowbrook",value:"Meadowbrook"},
              {name:"Media",value:"Media"},
              {name:"Melrose Park",value:"Melrose Park"},
              {name:"Merion",value:"Merion"},
              {name:"Miquon",value:"Miquon"},
              {name:"Morton",value:"Morton"},
              {name:"Mt Airy",value:"Mt Airy"},
              {name:"Moylan-Rose Valley",value:"Moylan-Rose Valley"},
              {name:"Narberth",value:"Narberth"},
              {name:"Neshaminy Falls",value:"Neshaminy Falls"},
              {name:"New Britain",value:"New Britain"},
              {name:"Newark",value:"Newark"},
              {name:"Noble",value:"Noble"},
              {name:"Norristown TC",value:"Norristown TC"},
              {name:"North Broad St",value:"North Broad St"},
              {name:"North Hills",value:"North Hills"},
              {name:"North Philadelphia",value:"North Philadelphia"},
              {name:"North Wales",value:"North Wales"},
              {name:"Norwood",value:"Norwood"},
              {name:"Olney",value:"Olney"},
              {name:"Oreland",value:"Oreland"},
              {name:"Overbrook",value:"Overbrook"},
              {name:"Paoli",value:"Paoli"},
              {name:"Penllyn",value:"Penllyn"},
              {name:"Pennbrook",value:"Pennbrook"},
              {name:"Philmont",value:"Philmont"},
              {name:"Primos",value:"Primos"},
              {name:"Prospect Park",value:"Prospect Park"},
              {name:"Queen Lane",value:"Queen Lane"},
              {name:"Radnor",value:"Radnor"},
              {name:"Ridley Park",value:"Ridley Park"},
              {name:"Rosemont",value:"Rosemont"},
              {name:"Roslyn",value:"Roslyn"},
              {name:"Rydal",value:"Rydal"},
              {name:"Ryers",value:"Ryers"},
              {name:"Secane",value:"Secane"},
              {name:"Sedgwick",value:"Sedgwick"},
              {name:"Sharon Hill",value:"Sharon Hill"},
              {name:"Somerton",value:"Somerton"},
              {name:"Spring Mill",value:"Spring Mill"},
              {name:"St. Davids",value:"St. Davids"},
              {name:"St. Martins",value:"St. Martins"},
              {name:"Stenton",value:"Stenton"},
              {name:"Strafford",value:"Strafford"},
              {name:"Suburban Station",value:"Suburban Station"},
              {name:"Swarthmore",value:"Swarthmore"},
              {name:"Tacony",value:"Tacony"},
              {name:"Temple U",value:"Temple U"},
              {name:"Thorndale",value:"Thorndale"},
              {name:"Torresdale",value:"Torresdale"},
              {name:"Trenton",value:"Trenton"},
              {name:"Trevose",value:"Trevose"},
              {name:"Tulpehocken",value:"Tulpehocken"},
              {name:"University City",value:"University City"},
              {name:"Upsal",value:"Upsal"},
              {name:"Villanova",value:"Villanova"},
              {name:"Wallingford",value:"Wallingford"},
              {name:"Warminster",value:"Warminster"},
              {name:"Washington Lane",value:"Washington Lane"},
              {name:"Wayne Station",value:"Wayne Station"},
              {name:"Wayne Jct",value:"Wayne Jct"},
              {name:"West Trenton",value:"West Trenton"},
              {name:"Whitford",value:"Whitford"},
              {name:"Willow Grove",value:"Willow Grove"},
              {name:"Wilmington",value:"Wilmington"},
              {name:"Wissahickon",value:"Wissahickon"},
              {name:"Wissinoming",value:"Wissinoming"},
              {name:"Wister",value:"Wister"},
              {name:"Woodbourne",value:"Woodbourne"},
              {name:"Wyndmoor",value:"Wyndmoor"},
              {name:"Wynnefield Avenue",value:"Wynnefield Avenue"},
              {name:"Wynnewood",value:"Wynnewood"},
              {name:"Yardley",value:"Yardley"}];  
            return autoValues.filter((option) => option.name.startsWith(value));
          }}
        />

      </Section>
      <Section
        title={<Text bold align="center">Arrival Station</Text>}>
        <TextInput
          title="Arrival Station"
          label="Arrival Station"
          placeholder="Find a Station"
          action="Add Item"
          settingsKey="arrivalStation"
          onAutocomplete={(value) => {
            const autoValues = [
              {name:"30th Street Station",value:"30th Street Station"},
              {name:"49th St",value:"49th St"},
              {name:"Airport Terminal A",value:"Airport Terminal A"},
              {name:"Airport Terminal B",value:"Airport Terminal B"},
              {name:"Airport Terminal C-D",value:"Airport Terminal C-D"},
              {name:"Airport Terminal E-F",value:"Airport Terminal E-F"},
              {name:"Allegheny",value:"Allegheny"},
              {name:"Allen Lane",value:"Allen Lane"},
              {name:"Ambler",value:"Ambler"},
              {name:"Angora",value:"Angora"},
              {name:"Ardmore",value:"Ardmore"},
              {name:"Ardsley",value:"Ardsley"},
              {name:"Bala",value:"Bala"},
              {name:"Berwyn",value:"Berwyn"},
              {name:"Bethayres",value:"Bethayres"},
              {name:"Bridesburg",value:"Bridesburg"},
              {name:"Bristol",value:"Bristol"},
              {name:"Bryn Mawr",value:"Bryn Mawr"},
              {name:"Carpenter",value:"Carpenter"},
              {name:"Chalfont",value:"Chalfont"},
              {name:"Chelten Avenue",value:"Chelten Avenue"},
              {name:"Cheltenham",value:"Cheltenham"},
              {name:"Chester TC",value:"Chester TC"},
              {name:"Chestnut Hill East",value:"Chestnut Hill East"},
              {name:"Chestnut Hill West",value:"Chestnut Hill West"},
              {name:"Churchmans Crossing",value:"Churchmans Crossing"},
              {name:"Claymont",value:"Claymont"},
              {name:"Clifton-Aldan",value:"Clifton-Aldan"},
              {name:"Colmar",value:"Colmar"},
              {name:"Conshohocken",value:"Conshohocken"},
              {name:"Cornwells Heights",value:"Cornwells Heights"},
              {name:"Crestmont",value:"Crestmont"},
              {name:"Croydon",value:"Croydon"},
              {name:"Crum Lynne",value:"Crum Lynne"},
              {name:"Curtis Park",value:"Curtis Park"},
              {name:"Cynwyd",value:"Cynwyd"},
              {name:"Darby",value:"Darby"},
              {name:"Daylesford",value:"Daylesford"},
              {name:"Delaware Valley College",value:"Delaware Valley College"},
              {name:"Devon",value:"Devon"},
              {name:"Downingtown",value:"Downingtown"},
              {name:"Doylestown",value:"Doylestown"},
              {name:"East Falls",value:"East Falls"},
              {name:"Eastwick Station",value:"Eastwick Station"},
              {name:"Eddington",value:"Eddington"},
              {name:"Eddystone",value:"Eddystone"},
              {name:"Elkins Park",value:"Elkins Park"},
              {name:"Elm St",value:"Elm St"},
              {name:"Elwyn Station",value:"Elwyn Station"},
              {name:"Exton",value:"Exton"},
              {name:"Fern Rock TC",value:"Fern Rock TC"},
              {name:"Fernwood",value:"Fernwood"},
              {name:"Folcroft",value:"Folcroft"},
              {name:"Forest Hills",value:"Forest Hills"},
              {name:"Ft Washington",value:"Ft Washington"},
              {name:"Fortuna",value:"Fortuna"},
              {name:"Fox Chase",value:"Fox Chase"},
              {name:"Germantown",value:"Germantown"},
              {name:"Gladstone",value:"Gladstone"},
              {name:"Glenolden",value:"Glenolden"},
              {name:"Glenside",value:"Glenside"},
              {name:"Gravers",value:"Gravers"},
              {name:"Gwynedd Valley",value:"Gwynedd Valley"},
              {name:"Hatboro",value:"Hatboro"},
              {name:"Haverford",value:"Haverford"},
              {name:"Highland Ave",value:"Highland Ave"},
              {name:"Highland",value:"Highland"},
              {name:"Holmesburg Jct",value:"Holmesburg Jct"},
              {name:"Ivy Ridge",value:"Ivy Ridge"},
              {name:"Jenkintown-Wyncote",value:"Jenkintown-Wyncote"},
              {name:"Langhorne",value:"Langhorne"},
              {name:"Lansdale",value:"Lansdale"},
              {name:"Lansdowne",value:"Lansdowne"},
              {name:"Lawndale",value:"Lawndale"},
              {name:"Levittown",value:"Levittown"},
              {name:"Link Belt",value:"Link Belt"},
              {name:"Main St",value:"Main St"},
              {name:"Malvern",value:"Malvern"},
              {name:"Manayunk",value:"Manayunk"},
              {name:"Marcus Hook",value:"Marcus Hook"},
              {name:"Market East",value:"Market East"},
              {name:"Meadowbrook",value:"Meadowbrook"},
              {name:"Media",value:"Media"},
              {name:"Melrose Park",value:"Melrose Park"},
              {name:"Merion",value:"Merion"},
              {name:"Miquon",value:"Miquon"},
              {name:"Morton",value:"Morton"},
              {name:"Mt Airy",value:"Mt Airy"},
              {name:"Moylan-Rose Valley",value:"Moylan-Rose Valley"},
              {name:"Narberth",value:"Narberth"},
              {name:"Neshaminy Falls",value:"Neshaminy Falls"},
              {name:"New Britain",value:"New Britain"},
              {name:"Newark",value:"Newark"},
              {name:"Noble",value:"Noble"},
              {name:"Norristown TC",value:"Norristown TC"},
              {name:"North Broad St",value:"North Broad St"},
              {name:"North Hills",value:"North Hills"},
              {name:"North Philadelphia",value:"North Philadelphia"},
              {name:"North Wales",value:"North Wales"},
              {name:"Norwood",value:"Norwood"},
              {name:"Olney",value:"Olney"},
              {name:"Oreland",value:"Oreland"},
              {name:"Overbrook",value:"Overbrook"},
              {name:"Paoli",value:"Paoli"},
              {name:"Penllyn",value:"Penllyn"},
              {name:"Pennbrook",value:"Pennbrook"},
              {name:"Philmont",value:"Philmont"},
              {name:"Primos",value:"Primos"},
              {name:"Prospect Park",value:"Prospect Park"},
              {name:"Queen Lane",value:"Queen Lane"},
              {name:"Radnor",value:"Radnor"},
              {name:"Ridley Park",value:"Ridley Park"},
              {name:"Rosemont",value:"Rosemont"},
              {name:"Roslyn",value:"Roslyn"},
              {name:"Rydal",value:"Rydal"},
              {name:"Ryers",value:"Ryers"},
              {name:"Secane",value:"Secane"},
              {name:"Sedgwick",value:"Sedgwick"},
              {name:"Sharon Hill",value:"Sharon Hill"},
              {name:"Somerton",value:"Somerton"},
              {name:"Spring Mill",value:"Spring Mill"},
              {name:"St. Davids",value:"St. Davids"},
              {name:"St. Martins",value:"St. Martins"},
              {name:"Stenton",value:"Stenton"},
              {name:"Strafford",value:"Strafford"},
              {name:"Suburban Station",value:"Suburban Station"},
              {name:"Swarthmore",value:"Swarthmore"},
              {name:"Tacony",value:"Tacony"},
              {name:"Temple U",value:"Temple U"},
              {name:"Thorndale",value:"Thorndale"},
              {name:"Torresdale",value:"Torresdale"},
              {name:"Trenton",value:"Trenton"},
              {name:"Trevose",value:"Trevose"},
              {name:"Tulpehocken",value:"Tulpehocken"},
              {name:"University City",value:"University City"},
              {name:"Upsal",value:"Upsal"},
              {name:"Villanova",value:"Villanova"},
              {name:"Wallingford",value:"Wallingford"},
              {name:"Warminster",value:"Warminster"},
              {name:"Washington Lane",value:"Washington Lane"},
              {name:"Wayne Station",value:"Wayne Station"},
              {name:"Wayne Jct",value:"Wayne Jct"},
              {name:"West Trenton",value:"West Trenton"},
              {name:"Whitford",value:"Whitford"},
              {name:"Willow Grove",value:"Willow Grove"},
              {name:"Wilmington",value:"Wilmington"},
              {name:"Wissahickon",value:"Wissahickon"},
              {name:"Wissinoming",value:"Wissinoming"},
              {name:"Wister",value:"Wister"},
              {name:"Woodbourne",value:"Woodbourne"},
              {name:"Wyndmoor",value:"Wyndmoor"},
              {name:"Wynnefield Avenue",value:"Wynnefield Avenue"},
              {name:"Wynnewood",value:"Wynnewood"},
              {name:"Yardley",value:"Yardley"}];  
            return autoValues.filter((option) => option.name.startsWith(value));
          }}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);