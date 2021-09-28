// Right bar -----------------------------------------------------

function openNav() { // function open right-bar.
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("close").style.display = "block";
    document.getElementById("open").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("title-menu-right").style.display = "block";
    document.getElementById("logout").style.display = "block";
    document.getElementById("logout-icon").style.display = "none";
}

function closeNav() { // function close right-bar.
    document.getElementById("mySidenav").style.width = "60px";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("title-menu-right").style.display = "none";
    document.getElementById("logout").style.display = "none";
    document.getElementById("logout-icon").style.display = "block";
}

// End right bar --------------------------------------------------
//
//
//
// Start file window_update_news.html ---------------------------------------

function choose_img(files_id) { // function choose img upload from file in your folder.
    $("#" + files_id).click();
}

function preview_image(event, obj) { // function show img upload frome file in your folder.
    var output = document.getElementById('show_' + obj.id);
    output.src = URL.createObjectURL(event.target.files[0]);
}

// function add_member(){
//     var check_input = [];
//     var add_member_to_table = [];

//     if($('#form_member_name').val() == ''){
//         check_input.push('-กรุณากรอกชื่อสมาชิก\n')
//     }

//     if($('#form_member_telephone').val() == ''){
//         check_input.push('-กรุณากรอกเบอร์โทรสมาชิก\n')
//     }

//     if(check_input.length > 0){
//         alert(check_input);
//         return false;
//     }else{
//         var time_id =  Date.now();
//         add_member_to_table += '<tr id="time_id_'+time_id+'">';
//         add_member_to_table += '<td> <input type="hidden" name="member_name[]" value="'+$('#form_member_name').val()+'">'+$('#form_member_name').val()+'</td>';
//         add_member_to_table += '<td> <input type="hidden" name="member_telephone[]" value="'+$('#form_member_telephone').val()+'" > '+$('#form_member_telephone').val()+'</td>';
//         add_member_to_table += '<td class="text-center">';
//         add_member_to_table += '<a onclick="delete_member('+time_id+')"';
//         add_member_to_table += 'class="btn btn-xs btn-danger"';
//         add_member_to_table += 'data-toggle="tooltip"';
//         add_member_to_table += 'style="color: white !important;"';
//         add_member_to_table += 'title="ลบสมาชิก">';
//         add_member_to_table += '<i class="fa fa-trash"></i>';
//         add_member_to_table += '</a>';
//         add_member_to_table += '</td>';
//         add_member_to_table += '</tr>';


//         $('#table_member_project').append(add_member_to_table);
//         $('#form_member_name').val('');
//         $('#form_member_telephone').val('');
//     }


// }
// End file window_update_news.php ---------------------------------------