(function chai() {
    console.log("DB connected");
})();

( (username) => {
    console.log("now connected ", username);
} )("ulluck")