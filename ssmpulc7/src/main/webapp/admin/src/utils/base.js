const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmpulc7/",
            name: "ssmpulc7",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmpulc7/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "同学录网站"
        } 
    }
}
export default base
