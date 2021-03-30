const data = {
  methods: {
    getPrefixAndIcon(val) {
      const prefix = val.substring(0, 3);
      const icon = val.substring(7, val.length);


      return [prefix, icon]
    }
  }
}

export default data
