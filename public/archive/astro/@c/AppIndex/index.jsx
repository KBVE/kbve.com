import * as React from "react";
import Fuse from 'fuse.js'
import _ from 'lodash'
// @mui
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// components
import PortfolioPreview from "@c/PortfolioPreview";
const AppIndex = ({ apps }) => {
  const [searchString, setSearchString] = React.useState("");

  const filteredApps = React.useMemo(() => {
    if (!apps) { return [] }
    if (!searchString) { return _.sortBy(apps, ['frontmatter.title']) }

    return new Fuse(_.sortBy(apps, ['frontmatter.title']), {
      includeScore: false,
      useExtendedSearch: true,
      keys: [{
        name: 'title',
        getFn: (a) => a.frontmatter.title
    }]
    }).search(`'"${searchString.toLowerCase()}"`).map(s => s.item).slice(0, 5)
  }, [apps, searchString])

  return (
    <Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        p={1}
      >
        <Typography variant="h3" sx={{ mt: 4 }}>
          All Applications
        </Typography>
        <Paper>
          <TextField
            key={"application-search-field"}
            placeholder="Search Applications..."
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            sx={{
              p: 1,
            }}
          />
        </Paper>
      </Stack>
      <div className="grid">
        {filteredApps.map((project) => (
          <PortfolioPreview key={project.title} project={project} />
        ))}
      </div>
    </Stack>
  );
};

export default AppIndex;
