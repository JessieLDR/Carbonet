<Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
<div className={classes.drawerContainer}>
  <Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
    <Link href="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
      {brandMobile}
    </Link>
  </Box>
  <List>
    <ListItem button key={content['link1']}>
      <ListItemIcon className={classes.iconWrapper}>
        <LayersIcon className={classes.icon} />
      </ListItemIcon>
      <ListItemText primary={content['link1']} />
    </ListItem>
    <ListItem button key={content['link2']}>
      <ListItemIcon className={classes.iconWrapper}>
        <FilterHdrIcon className={classes.icon} />
      </ListItemIcon>
      <ListItemText primary={content['link2']} />
    </ListItem>
    <ListItem button key={content['link3']}>
      <ListItemIcon className={classes.iconWrapper}>
        <DirectionsBusIcon className={classes.icon} />
      </ListItemIcon>
      <ListItemText primary={content['link3']} />
    </ListItem>
    <ListItem button key={content['link4']}>
      <ListItemIcon className={classes.iconWrapper}>
        <NotificationImportantIcon className={classes.icon} />
      </ListItemIcon>
      <ListItemText primary={content['link4']} />
    </ListItem>
  </List>
</div>
</Drawer>