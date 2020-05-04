import Vue from 'vue';
import Vuex from 'vuex';
import { getToken, setToken } from '@/utils/cookie.js';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: getToken() || null, //token令牌
        userinfo: JSON.parse(sessionStorage.getItem('userinfo') || null), //用户信息
        outActive: false, //退出
        changeActive: false, //切换
        gamechangeActive: false, //游戏

        //用户管理
        userList:[
            {
              id: 1,
              name: "吴亦凡",
              createTime:'2020-01-11',
              username: "123456",
              password: "abcdddd",
              sex: "男",
              email: "4u82304u2ji@163.com",
              autograph: "我是真滴牛逼"
            },
            {
              id: 2,
              createTime:'2010-02-11',
              name: "罗志祥",
              username: "666666",
              password: "123456",
              sex: "男",
              email: "fg423fd234@163.com",
              autograph: "多人运动冲冲冲"
            },
            {
              id: 3,
              createTime:'2019-05-22',
              name: "娜美",
              username: "235632",
              password: "jkljkljkl",
              sex: "女",
              email: "aaaaaaaa@163.com",
              autograph: "我能控制天气"
            },
            {
              id: 4,
              createTime:'2020-01-13',
              name: "路飞",
              username: "1378433758",
              password: "111111111",
              sex: "男",
              email: "11111111@163.com",
              autograph: "我是即将成为海贼王的男人"
            },
            {
              id: 5,
              createTime:'2020-03-07',
              name: "蔡徐坤",
              username: "123456",
              password: "abcdddd",
              sex: "男",
              email: "4u82304u2ji@163.com",
              autograph: "我是真滴牛逼"
            },
            {
              createTime:'2020-02-12',
              id: 6,
              name: "姚明",
              username: "666666",
              password: "123456",
              sex: "男",
              email: "fg423fd234@163.com",
              autograph: "多人运动冲冲冲"
            },
            {
              createTime:'2020-04-30',
              id: 7,
              name: "索隆",
              username: "235632",
              password: "jkljkljkl",
              sex: "女",
              email: "aaaaaaaa@163.com",
              autograph: "我能控制天气"
            },
            {
              createTime:'2020-05-01',
              id: 8,
              name: "成龙",
              username: "235632",
              password: "jkljkljkl",
              sex: "女",
              email: "aaaaaaaa@163.com",
              autograph: "我能控制天气"
            },
            {
              createTime:'2020-01-11',
              id: 9,
              name: "乔巴",
              username: "235632",
              password: "jkljkljkl",
              sex: "女",
              email: "aaaaaaaa@163.com",
              autograph: "我能控制天气"
            },
            {
              createTime:'2019-09-28',
              id: 10,
              name: "波塞冬",
              username: "235632",
              password: "jkljkljkl",
              sex: "女",
              email: "aaaaaaaa@163.com",
              autograph: "我能控制天气"
            }
        ],
        userCommentList: {
            1: {
              模型操作: {
                最高分: 56,
                最低分: 11,
                评论: [
                  { star: 5, content: "是真的好玩" },
                  { star: 1, content: "好像有点bug" }
                ]
              },
              飞机大战: {
                最高分: 342,
                最低分: 111,
                评论: [
                  { star: 5, content: "游戏设计蛮不错的" },
                  { star: 5, content: "很棒很棒" },
                  { star: 5, content: "好刺激呀！！！！" }
                ]
              },
              连连看: {
                最高分: 56,
                最低分: 11,
                评论: [{ star: 3, content: "还可以" }]
              }
            },
            2: {
              模型操作: {
                最高分: 44,
                最低分: 5,
                评论: [
                  { star: 3, content: "可以可以" },
                  { star: 1, content: "结束设置的不行" }
                ]
              },
              飞机大战: {
                最高分: 1234,
                最低分: 11,
                评论: [
                  { star: 5, content: "打击感蛮好的！！" },
                  { star: 3, content: "爽啊！！！！" }
                ]
              }
            }
        },
        //评论管理
        commentList:[
            {
              id: 1,
              name: "吴亦凡",
              game: "飞机大战",
              star: 5,
              content: "真的好玩！！！",
              createTime: "2013-03-11"
            },
            {
              id: 2,
              createTime: "2010-02-11",
              name: "罗志祥",
              game: "飞机大战",
              star: 4,
              content: "体验很不错"
            },
            {
              id: 3,
              createTime: "2019-05-22",
              name: "娜美",
              game: "连连看",
              star: 2,
              content: "一般一般。。。"
            },
            {
              id: 4,
              createTime: "2020-01-13",
              name: "路飞",
              game: "飞机大战",
              star: 5,
              content: "操作流畅"
            },
            {
              id: 5,
              createTime: "2020-03-07",
              name: "蔡徐坤",
              game: "模型操作",
              star: 4,
              content: "挺欢快的"
            },
            {
              createTime: "2020-02-12",
              id: 6,
              name: "姚明",
              game: "飞机大战",
              star: 5,
              content: "打击感一流！！！！！！！"
            },
            {
              createTime: "2020-04-30",
              id: 7,
              name: "索隆",
              game: "飞机大战",
              star: 1,
              content: "要是能在手机上玩就好了"
            },
            {
              createTime: "2020-05-01",
              id: 8,
              name: "成龙",
              game: "飞机大战",
              star: 3,
              content: "还阔以吧"
            },
            {
              createTime: "2020-01-11",
              id: 9,
              name: "乔巴",
              game: "飞机大战",
              star: 5,
              content: "很不错，很适合年轻人"
            },
            {
              createTime: "2019-09-28",
              id: 10,
              name: "波塞冬",
              game: "飞机大战",
              star: 4,
              content: "感觉玩不过来呀"
            }
        ],
        //分数记录
        gradeList:[
            //-------------------------------------------飞机大战
            { id:1, name:'吴亦凡',game:'飞机大战',grade:156, createTime:'2020-03-28'},
            {id:2, name:'吴亦凡',game:'飞机大战',grade:423, createTime:'2020-03-28'},
            {id:3, name:'吴亦凡',game:'飞机大战',grade:543,createTime:'2020-03-28' },
            {id:4, name:'罗志祥',game:'飞机大战',grade:123,createTime:'2020-03-28' },
            {id:5, name:'罗志祥',game:'飞机大战',grade:654,createTime:'2020-03-28' },
            {id:6, name:'罗志祥',game:'飞机大战',grade:234,createTime:'2020-03-28' },
            {id:7, name:'娜美',game:'飞机大战',grade:654,createTime:'2020-03-28' },
            {id:8, name:'娜美',game:'飞机大战',grade:234, createTime:'2020-03-28'},
            {id:9, name:'娜美',game:'飞机大战',grade:786, createTime:'2020-03-28'},
            {id:10, name:'路飞',game:'飞机大战',grade:23,createTime:'2020-03-28' },
            {id:11, name:'路飞',game:'飞机大战',grade:453,createTime:'2020-03-28' },
            {id:12, name:'路飞',game:'飞机大战',grade:432,createTime:'2020-03-28' },
            {id:13, name:'蔡徐坤',game:'飞机大战',grade:78,createTime:'2020-03-28' },
            {id:14, name:'蔡徐坤',game:'飞机大战',grade:756, createTime:'2020-03-28'},
            {id:15, name:'蔡徐坤',game:'飞机大战',grade:678, createTime:'2020-03-28'},
            {id:16, name:'成龙',game:'飞机大战',grade:64, createTime:'2020-03-28'},
            {id:17, name:'成龙',game:'飞机大战',grade:272,createTime:'2020-03-28' },
            {id:18, name:'成龙',game:'飞机大战',grade:364,createTime:'2020-03-28' },
            {id:19, name:'乔巴',game:'飞机大战',grade:235,createTime:'2020-03-28' },
            {id:20, name:'乔巴',game:'飞机大战',grade:456,createTime:'2020-03-28' },
            {id:21, name:'乔巴',game:'飞机大战',grade:234,createTime:'2020-03-28' },
            //-------------------------------------------模型操作
            {id:22, name:'吴亦凡',game:'模型操作',grade:11, createTime:'2020-03-28'},
            {id:23, name:'吴亦凡',game:'模型操作',grade:22, createTime:'2020-03-28'},
            {id:24, name:'吴亦凡',game:'模型操作',grade:33, createTime:'2020-03-28'},
            {id:25, name:'罗志祥',game:'模型操作',grade:44, createTime:'2020-03-28'},
            {id:26, name:'罗志祥',game:'模型操作',grade:55,createTime:'2020-03-28' },
            {id:27, name:'罗志祥',game:'模型操作',grade:66,createTime:'2020-03-28' },
            {id:28, name:'娜美',game:'模型操作',grade:77,createTime:'2020-03-28' },
            {id:29, name:'娜美',game:'模型操作',grade:88, createTime:'2020-03-28'},
            {id:30, name:'娜美',game:'模型操作',grade:99, createTime:'2020-03-28'},
            {id:31, name:'路飞',game:'模型操作',grade:1010,createTime:'2020-03-28' },
            {id:32, name:'路飞',game:'模型操作',grade:1111, createTime:'2020-03-28'},
            {id:33, name:'路飞',game:'模型操作',grade:2222, createTime:'2020-03-28'},
            {id:34, name:'蔡徐坤',game:'模型操作',grade:333,createTime:'2020-03-28' },
            {id:35, name:'蔡徐坤',game:'模型操作',grade:111,createTime:'2020-03-28' },
            {id:36, name:'蔡徐坤',game:'模型操作',grade:222,createTime:'2020-03-28' },
            {id:37, name:'成龙',game:'模型操作',grade:333, createTime:'2020-03-28'},
            {id:38, name:'成龙',game:'模型操作',grade:444,createTime:'2020-03-28' },
            {id:39, name:'成龙',game:'模型操作',grade:555,createTime:'2020-03-28' },
            {id:40, name:'乔巴',game:'模型操作',grade:666,createTime:'2020-03-28' },
            //-------------------------------------------连连看
            {id:41, name:'吴亦凡',game:'连连看',grade:1,createTime:'2020-03-28' },
            {id:42, name:'吴亦凡',game:'连连看',grade:2,createTime:'2020-03-28' },
            {id:43, name:'吴亦凡',game:'连连看',grade:3,createTime:'2020-03-28' },
            {id:44, name:'罗志祥',game:'连连看',grade:4,createTime:'2020-03-28' },
            {id:45, name:'罗志祥',game:'连连看',grade:5,createTime:'2020-03-28' },
            {id:46, name:'罗志祥',game:'连连看',grade:6,createTime:'2020-03-28' },
            {id:47, name:'娜美',game:'连连看',grade:7, createTime:'2020-03-28'},
            {id:48, name:'娜美',game:'连连看',grade:8, createTime:'2020-03-28'},
            {id:49, name:'娜美',game:'连连看',grade:9, createTime:'2020-03-28'},
            {id:50, name:'蔡徐坤',game:'连连看',grade:11, createTime:'2020-03-28'},
            {id:51, name:'蔡徐坤',game:'连连看',grade:12, createTime:'2020-03-28'},
            {id:52, name:'蔡徐坤',game:'连连看',grade:13,createTime:'2020-03-28' },
            {id:53, name:'成龙',game:'连连看',grade:31,createTime:'2020-03-28' },
            {id:54, name:'成龙',game:'连连看',grade:21, createTime:'2020-03-28'},
            {id:55, name:'成龙',game:'连连看',grade:123, createTime:'2020-03-28'},
            {id:56, name:'乔巴',game:'连连看',grade:2,createTime:'2020-03-28' },
            {id:57, name:'乔巴',game:'连连看',grade:432,createTime:'2020-03-28' },
            {id:58, name:'乔巴',game:'连连看',grade:123,createTime:'2020-03-28' },
            //-------------------------------------------打击板
            {id:59, name:'吴亦凡',game:'打击板',grade:123, createTime:'2020-03-28'},
            {id:60, name:'吴亦凡',game:'打击板',grade:234,createTime:'2020-03-28' },
            {id:61, name:'吴亦凡',game:'打击板',grade:345, createTime:'2020-03-28'},
            {id:62, name:'罗志祥',game:'打击板',grade:456, createTime:'2020-03-28'},
            {id:63, name:'罗志祥',game:'打击板',grade:567, createTime:'2020-03-28'},
            {id:64, name:'罗志祥',game:'打击板',grade:678,createTime:'2020-03-28' },
            {id:65, name:'娜美',game:'打击板',grade:789,createTime:'2020-03-28' },
            {id:66, name:'娜美',game:'打击板',grade:987,createTime:'2020-03-28' },
            {id:67, name:'娜美',game:'打击板',grade:876,createTime:'2020-03-28' },
            {id:68, name:'路飞',game:'打击板',grade:756,createTime:'2020-03-28' },
            {id:69, name:'路飞',game:'打击板',grade:654, createTime:'2020-03-28'},
            {id:70, name:'路飞',game:'打击板',grade:543, createTime:'2020-03-28'},
            {id:71, name:'蔡徐坤',game:'打击板',grade:423, createTime:'2020-03-28'},
            {id:72, name:'蔡徐坤',game:'打击板',grade:432, createTime:'2020-03-28'},
            {id:73, name:'蔡徐坤',game:'打击板',grade:321, createTime:'2020-03-28'},
        ],
        //游戏管理
        gameTypes:[
            { name:'休闲游戏' },
            { name:'益智游戏' },
            { name:'动作游戏' },
            { name:'跑酷游戏' },
        ],
        gameList:[
            { id:1,name:'模型操作',type:'休闲游戏', createTime:'2020-02-22',
                background:'我是模型操作游戏背景',
            rule:'我是模型操作游戏规则，骄傲的死哦大家i奥斯丁加上' },
            { id:2,name:'飞机大战',type:'休闲游戏' ,createTime:'2020-02-22',
            background:'我是飞机大战游戏背景',
            rule:'我是飞机大战游戏规则，骄傲的死哦大家i奥斯丁加上' },
            {id:3, name:'打击板',type:'益智游戏' ,createTime:'2020-02-22',
            background:'我是打击板游戏背景',
            rule:'我是打击板游戏规则，骄傲的死哦大家i奥斯丁加上' },
            { id:4,name:'连连看',type:'益智游戏' ,createTime:'2020-02-22',
            background:'我是连连看游戏背景',
            rule:'我是连连看游戏规则，骄傲的死哦大家i奥斯丁加上' },
        ],
        //资讯管理
        infoTypes:[
            { name:'游戏攻略' },
            { name:'活动更新' },
            { name:'BUG修复' },
            { name:'新增内容' },
        ],
        infoList:[
            {
             id:1, game:'飞机大战',title:'这就是文艺复兴？《丁丁历险记》已经开始准备改游戏了', type:'游戏攻略',
            introduce:'在13世纪晚期的佛罗伦萨，但丁、彼特拉克以及乔托几位大神重新开启了艺术的殿堂，用画作、文章作为钥匙，开启了一扇名为艺术复兴的大门。但这几位大师可能想不到的是，800年之后的' ,
            url:'http://www.baidu.com', createTime:'2020-03-16'},
            {  id:2,game:'飞机大战',title:'不知不觉“我能把游戏打通关”已经成为了一种调侃 ', type:'游戏攻略',
            introduce:'还记得上小学的时候，也就是2000年的那会，在当时电脑虽然已经慢慢普及起来了，但能玩的网游还是比较的少，大部分的小伙伴们喜欢玩的还是那些经典的单机游戏，比如《三国英豪》、《仙剑奇侠传》等...' ,
            url:'http://www.baidu.com',createTime:'2020-03-16'},
            {  id:3,game:'模型操作',title:'《英雄传说：创之轨迹》开启预约 实体标准版售517元 ', type:'游戏攻略',
            introduce:'《英雄传说：创之轨迹》在今日开启官网预约，其中实体标准版预计售价7800日元（约合人民币517元），不含税。数字标准版预计售价7600日元（约合人民币504元），含税。' ,
            url:'http://www.baidu.com',createTime:'2020-03-16'},
            {  id:4,game:'飞机大战',title:'NS日服开启《神奇101：复刻版》预购 7.6GB，无中文', type:'活动更新',
            introduce:'神谷英树在昨晚发推表示，NS日服商店已经开启《神奇101：复刻版》预售，售价4387日元（约合人民币290元），将于6月11日正式解锁。' ,
            url:'http://www.baidu.com',createTime:'2020-03-16'},
            {  id:5,game:'飞机大战',title:'《路易的鬼屋3》多人DLC已上线 追加小游戏、新服饰', type:'新增内容',
            introduce:'《路易的鬼屋3（Luigis Mansion 3）》新DLC“多人游玩包”第2弹在今日（4月30日）上线，追加三套新服饰以及小游戏' ,
            url:'http://www.baidu.com',createTime:'2020-03-16'},
            {  id:6,game:'连连看',title:'《LOL》凯南背景故事“光影之间” 初生之土岌岌可危', type:'BUG修复',
            introduce:'英雄联盟宇宙官方微博日前公布了凯南的背景故事“光影之间”。在阿卡丽离开均衡教派后，“暗影之拳“的职责虚位待补，“首领三人组”只剩下两人——慎和凯南，被战争碾过的初生之土平衡岌岌可危。' ,
            url:'http://www.baidu.com',createTime:'2020-03-16'},
            {  id:7,game:'连连看',title:'有理有据！《COD：战区/现代战争》加入观战举报功能', type:'活动更新',
            introduce:'据Infinity Ward官方推特发布的消息，在本周发布的更新当中，官方将为《使命召唤：战区》和《使命召唤：现代战争》上线新的“死亡回放&观战举报功能”，在推文中Infinity Wa...' ,
            url:'http://www.baidu.com',createTime:'2020-03-16'},
            {  id:8,game:'打击板',title:'《任天堂明星大乱斗》联动角色6月公布 DLC开发顺利', type:'新增内容',
            introduce:'《任天堂明星大乱斗：特别版》制作人樱井政博近日透露，虽然目前还在寻找远程办公的最佳形式，不过游戏DLC开发很顺利，预计6月就可以公开与《ARMS》联动的角色了。...' ,
            url:'http://www.baidu.com',createTime:'2020-03-16'},
            {  id:9,game:'打击板',title:'《生化3：重制版》吉尔丰胸MOD 有一说一，太大了', type:'游戏攻略',
            introduce:'油管MOD“老司机”GrizzoUK在今日发布了《生化危机3：重制版》吉尔黑色束胸“大”MOD，有一说一这个“车头灯”是真的大。' ,
            url:'http://www.baidu.com',createTime:'2020-03-16'}
        ],

    },
    getters: {
      //获取对应游戏信息
      getDetailByGame:state=> name => {
        return state.gameList.filter(item=>{
          return item.name == name;
        })[0];
      },
        //获取对应游戏排行榜
        getGradeByGame:state => (game) => {
            return state.gradeList.filter(item=>{
                return item.game == game;
            }).sort((last,next)=>{
                if(last.grade < next.grade){
                    return 1;
                }else {
                    return -1;
                }
            })
        },
        //获取对应游戏评论
        getCommentByGame:state => game => {
          return state.commentList.filter(item=>{
             return item.game == game;
          });
        },
        //获取对应游戏资讯
        getInfoByGame:state=>(game,type)=>{
          return state.infoList.filter(item=>{
            return item.game == game && item.type == type;
          });
        }
    },
    mutations: {
        setGameChangeActive(state, value) {
            state.gamechangeActive = value;
        },
        setChangeActive(state, value) {
            state.changeActive = value;
        },
        setOutActive(state, value) {
            state.outActive = value;
        },
        setToken(state, value) {
            setToken(value);
            state.token = value;
        },
        setUserInfo(state, value) {
            sessionStorage.setItem('userinfo', JSON.stringify(value));
            state.userinfo = value;
        }
    },
    actions: {},
    modules: {}
})