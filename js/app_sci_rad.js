
    var lineStyle = {
        normal: {
            width: 1.5,
            opacity: 0.5
        }
    };
 
function rad(chart,a){
    option = {
        backgroundColor: '#333333',
        
        title:{
            text:'研究单位网络科普传播途径分析',
            
            x:'center',//水平位置：居中
            y:'bottom',//垂直位置：底部
            textStyle: {
                color: '#e3e3e3',
                fontSize:a*0.013,
                lineHeight:a*0.015
            },
        },
        
        center:['50%','50%'],
        radar: {
            indicator: [
                { name: '本机构网站科普栏目', max: 103},
                { name: '自建科普网站', max: 103},
                { name: '中国科普博览', max: 103},
                { name: '明知科普网', max: 103},
                { name: '其他数字媒体传播', max: 103}
                        
                ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)',
                    fontSize:a*0.009,
                },
                lineHeight: a*0.01,
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)','rgba(238, 197, 102, 1)'
                    ].reverse(),
                },
    
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)',
                    
                }
            }
        },
        series: [
            {
                name: '研究所',
                type: 'radar',
                lineStyle: lineStyle,
                data : [
                    {
                        value: [49, 82, 73, 79, 65],
                    },
                    
                ],
                itemStyle: {
                    show:true,
                    normal: {
                        color: '#F9713C',
                        label: {				          
                            show: true,				          
                            position: 'top',		          
                            textStyle: {				            
                                color: 'rgb(238, 197, 102)',
                                fontSize:a*0.008,		      
                            }
                        }		
                        
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            }
        ],
    };


    
    $.get('./data/application-science.json').done(function (data) {
        //alert(data);
        if (typeof (data) == "string") {
            //alert('2'+data.std)
            data = JSON.parse(data);
            //alert('1'+data.year)
        }
        //alert(data.average);
        chart.setOption({
            series: [{  
                name: '研究所',
                data: [
                    {
                        value : data.rad,
                    },
                    
                ],
            }]
        });

    });
        //使用制定的配置项和数据显示图表
        chart.setOption(option);
}
