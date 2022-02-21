
function wash(callback) {
    setTimeout(function () {
        console.log('wash');
        callback();
    }, 3000);
}

function dry(callback) {
    setTimeout(function () {
        console.log('dry');
        callback();
    }, 2000);
}

function fold(callback) {
    setTimeout(function () {
        console.log('fold');
        callback();
    }, 1000);
}

function doLaundry() {

    wash(function () {
        dry(function () {
            fold(function () {
                console.log("done");
            })
        })
    })
}


doLaundry()



// function doLaundry() {

//     console.log("done");

//     dry(function() {
//         console.log("dry2222");
//         fold(function() {})
//         wash(function() {
//             fold(function() {
//                 console.log("done done2");
//             })
//         })
//     })
//   }


//  function doLaundry() {

//  wash(() => {
//     dry(() => {
//        fold(() => {
//           console.log('Done')
//        })
//     })
//  })
//  }