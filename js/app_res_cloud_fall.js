function bar1(mychart,a){
    option = {
        color:['#893448','#b5304d', '#EA5151', '#FF7853', '#FFAE57', '#ffc786'],
        title: {
            text: '云计算机时统计',
            textStyle:{
                color:'#e3e3e3',
                fontSize:a*0.013
            },
            left:'center',
            top:5

        },
        legend: {
            data:  ['论文','专利','软件著作权','文章',
            '获奖','专著'],
            textStyle:{
                color:'#e3e3e3',
            },
            bottom:'1%',
            itemGap:40,
            type:'scroll',
            textStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            },
            type:'scroll',
            left:'center'

        },
        grid:{
            containLabel:true,
            left:1
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            name: '个',//x轴标签
            type: 'value',
            boundaryGap: [0, 0.01],
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#e3e3e3',
                }
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.008,
                }
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            splitNumber:5,
            interval:80,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }    
        },

        yAxis: {
            //name:'年份',//y轴单位
            type: 'category',
            data: [],  //x轴坐标
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.008,
                    lineHeight:20,
                }
            },
            axisTick:{
                show: false,
               
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            z:999,
        },
        grid: {
            containLabel: true
        },

        series: [
        {
            name: '论文',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '专利',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },

        {
            name: '软件著作权',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '文章',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            z:999,
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },
        {
            name: '获奖',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },{
            name: '专著',
            type: 'bar',
            barMaxWidth:35,
            stack: '总量',
            
            data: [],
            itemStyle:{
                opacity:0.85,
            }
        },

    ]};

    $.get('./data/app_res_cloud.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
           //alert('2'+data.year);
            data = JSON.parse(data);
        //alert('1'+data.year);
        }
        //alert(data.year);
        mychart.setOption({
            yAxis: [
                
                {
                    //name:'年份',
                    data: data.x3, //类目数据（在类目轴中有效）
                }
            ],

            series: [
                {
                    name: '论文',
                    data: data.paper,
                },
                {
                    name: '专利',
                    data: data.patent,
                },
        
                {
                    name: '软件著作权',
                    data: data.software,
                },
                {
                    name: '文章',
                    data: data.para,
                },
                {
                    name: '获奖',
                    data: data.awards,
                },{
                    name: '专著',
                    data: data.publish,
                },]
        });

    });



    mychart.setOption(option);
}

function bar2(mychart,a){
    option = {
        color:['#FFAE57'],
        backgroundColor:'#333333',
        // title: {
        //     text: '学科领域课题组云计算科研应用机时统计',
        //     left: 'center',
        //     top: 0,
        //     textStyle: {
        //         color: '#e3e3e3',
        //         fontSize:'130%'
        //     }
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '{b}: {c}万小时',
            
            
        },
        grid:{
            containLabel:true,

        },
        yAxis: {
            data: ['其他','应用科学和\n工程技术','生物生命科学','材料、前沿科学\n和未来科技','生态环境',
        '信息科学','物理、化学\n和数学','天文和地球科学'],
            //name:'万小时',
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.009,
            },
            axisLabel: {

                interval: 0,
                    },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLine:{
                show:true,
                lineStyle:{
                color:'#e3e3e3',
                }
            },
            show:true,
        },

        xAxis: {
            type: 'value',
            name:'万小时',
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.009,
            },
            axisLabel:{
                textStyle:{
                    fontSize:a*0.009,
                }
            },
            axisTick:{
                show: false,
                alignWithLabel:true,
                length:0,
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            splitNumber:5,
            interval:1000,
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#aaaaaa',
                    opacity:0.4,
                }
            }

        },
        series: [{
            name: '数值',
            type: 'bar',
            data: [2.28, 371.88, 553.57, 677.33, 958.8, 1300.32, 1868.11, 2327],
            
            itemStyle:{
                color:'#FF7853',
                opacity:0.85,
                
            },
            barMaxWidth:30,
            //barCategoryGap:'100%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}万小时'
                }
            },
        },
        
        ]
      };

      $.get('./data/app_res_cloud.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.bar1);
             data = JSON.parse(data);
         //alert('1'+data.bar1);
         }
         //alert(data.bar1);
         mychart.setOption({
             yAxis: [
                 
                 {
                     data: data.x4, //类目数据（在类目轴中有效）
                 }
             ],
 
             series: [{
                 data: data.y4,
             }]
         });

    });
    mychart.setOption(option);

}