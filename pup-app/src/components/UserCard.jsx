import React from 'react';

// Component ย่อยๆ
const Avatar = () => (
    <img 
        src="https://scontent.fkdt1-1.fna.fbcdn.net/v/t1.6435-9/163880457_801928514071884_4386476063872752357_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TXN0wJXOqQ0Q7kNvwEy264b&_nc_oc=AdnsFNjGzL2t9-byN3V5aDMBF4SmtYbyUkyNHoAKSOEeKxjbV4HSYLQn7D8DrVfbjh7_MC2HoN3MbtMycmVwoAmR&_nc_zt=23&_nc_ht=scontent.fkdt1-1.fna&_nc_gid=rz-___NqVkFRzvE-Dw_lZQ&oh=00_AfYNAnMOufg1Ged9s67xCp07uGfplSSr_STlvSP59IuXRg&oe=68DFC12E" 
        alt="User Avatar"
        style={{
            borderRadius: '0%',
            alignItems: 'center',
            width: '300px',
            height: '350px',
            border: '2px solid #050505',
            
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#36BA3D', margin: '10px 0',fontSize: '40px',}}>
        กันติทัต ศรีสวัสดิ์
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '20px', textAlign: 'center' }}>
        รหัสนักศึกษา : 660710242 <br/>
        อายุ : 21 ปี <br/>
        นักศึกษาชั้นปีที่ 3
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #CCBFBE',
            padding: '50px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9',
            maxWidth: '7000px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;