module.exports = {
  title: 'Knowledgebase',
  description: 'Here you can find information for absolutely everything you need for setting up your own website!',
  themeConfig: {
    sidebar: [
      {
        title: 'Getting Started',   // required
        path: '',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/'
        ]
      },
      
      {
        title: 'FTP',   // required
        path: '',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/ftp/connecting-to-ftp'
        ]
      },
    ]
  }
}
