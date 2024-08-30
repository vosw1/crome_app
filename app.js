const player = {
    name: "min",
    sayHello: function(otherName) {
        console.log("hello! " + otherName);
    }
};

// sayHello 메서드 호출 시, 문자열 인자를 전달해야 합니다.
player.sayHello("song");