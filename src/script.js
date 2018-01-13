function scrollToExperience() {
    var experience = document.getElementById("experience");
    zenscroll.to(experience);
}

function scrollToProjects() {
    var projects = document.getElementById("projects");
    zenscroll.to(projects);
}

function scrollToAbout() {
    var about = document.getElementById("about");
    zenscroll.to(about);
}


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    $(".dropdown").click(function() {
        $(".dropdown-menu").slideDown(300);
    });
});

$(document).click(function(e) {
    e.stopPropagation();
    var container = $(".dropdown");

    if (container.has(e.target).length === 0) {
        $(".dropdown-menu").slideUp(300);
    }
});

! function() {
    var t;
    if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void(window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0,
        t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
        t.factory = function(e) {
            return function() {
                var n;
                return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
            };
        }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
        }), t.load = function(t) {
            var e, n, o, i;
            e = 3e5, i = Math.ceil(new Date() / e) * e, o = document.createElement("script"),
                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js",
                n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
        });
}();
drift.SNIPPET_VERSION = '0.3.1';
drift.load('y5fd5ndskw39');

$(document).ready(function() {
    $(".emailname").hide();
    $(".phonename").hide();
});

$(document).ready(function() {
    $(".email").click(function() {
        $(".emailname").fadeToggle(200);
    });
});
$(document).ready(function() {
    $(".phone").click(function() {
        $(".phonename").fadeToggle(200);
    });
});


function copyValue() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand('copy');
}

//Loading Screen

var timeSpin;

function loadScreen() {
    timeSpin = setTimeout(showPage, 400);
}

function showPage() {
    document.getElementById("loading-wrapper").style.display = "none";
    document.getElementById("loading-text").style.display = "none";
    document.getElementById("loading-content").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

/*function ScrollToBottom() {
            window.scrollTo(0, document.body.scrollHeight);
        }

        $(document).ready(function() {
            $(".introtext").hide();
        });
        $(document).ready(function() {
            $("footer").hide();
        });

        $(document).ready(function() {
            $(".dropdown").hide();
        });

        $(document).ready(function() {
            $(".link3").click(function() {
                $(".dropdown").slideDown(300);
            });
        });

        $(document).ready(function() {
            $(".dropdown").mouseleave(function() {
                $(".dropdown").slideUp(300);
            });
        });

        $(document).ready(function() {
            $("#arrow").click(function() {
                $(".welcome").fadeIn(500);
                $(".introtext").fadeIn(2000, "linear");
            });
        });

        $(document).ready(function() {
            $(".bg").mouseenter(function() {
                $(".welcome").fadeIn(500);
                $(".introtext").fadeIn(2000, "linear");
                $("footer").fadeIn(2000);
            });
        });
        */