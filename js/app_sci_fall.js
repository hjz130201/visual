function bar1(mychart,a){
        
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                
            },
            formatter: '{b}: {c}家',
            
            
        },
        grid:{
            containLabel:true,

        },
        xAxis: {
            data: ['独立APP','视频、\n直播平台','传统纸媒','院属平台','电视、\n广播媒体','问答社区','新闻资\n讯平台',],
            //name:'个',
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
            },
            axisLabel: {
                textStyle:{
                    fontSize:a*0.008,
                    lineHeight:a*0.009,
                },

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

        yAxis: {
            type: 'value',
            name:'家',
            min:0,
            max:24,
            show:true,
            nameTextStyle:{
                color:'#e3e3e3',
                fontSize:a*0.008,
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
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#e3e3e3',
                }
            },
            splitNumber:5,
            interval:6,
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
            data: [24,18,18,17,14,8,6],
            itemStyle:{
                color:'#FFAE57',
                opacity:0.85,
                
            },
            barMaxWidth:60,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter:'{c}家'
                }
            },
        }]
      };
    $.get('./data/application-science.json').done(function (data) {
        //alert(data.bar1);
        if (typeof (data) == "string") {
            //alert('2'+data.bar1);
             data = JSON.parse(data);
         //alert('1'+data.bar1);
         }
         //alert(data.bar1);
         mychart.setOption({
             xAxis: [
                 
                 {
                     data: data.bar1, //类目数据（在类目轴中有效）
                 }
             ],
 
             series: [{
                 data: data.bar1_value,
             }]
         }); 

    });
    mychart.setOption(option);
}

    function bar2(mychart,a){
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    
                },
                formatter: '{b}: {c}万元',
                
                
            },
            grid:{
                containLabel:true,
    
            },
            xAxis: {
                data: ['天文和\n地球科学','生物生\n命科学','信息科学','物理、化\n学和数学','应用科学\n和工程技术',
            '生态环境','材料、前沿科\n学和未来科技','其他'],
                //name:'个',
                nameTextStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.008,
                },
                axisLabel: {
                    textStyle:{
                        fontSize:a*0.008,
                        lineHeight:a*0.009,
                    },

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
    
            yAxis: {
                type: 'value',
                name:'万元',
                min:0,
                max:960,
                show:true,
                nameTextStyle:{
                    color:'#e3e3e3',
                    fontSize:a*0.008,
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
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'#e3e3e3',
                    }
                },
                splitNumber:5,
                interval:240,
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
                data: [952.1, 910.6, 531.38, 373.4, 327.53, 207, 41, 0],
                itemStyle:{
                    color:'#FF7853',
                    opacity:0.85,
                    
                },
                barMaxWidth:60,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'{c}万元'
                    }
                },
            }]
          };
    
    
        $.get('./data/application-science.json').done(function (data) {
            //alert(data);
            if (typeof (data) == "string") {
                //alert('2'+data.bar1);
                 data = JSON.parse(data);
             //alert('1'+data.bar1);
             }
             //alert(data.bar1);
             mychart.setOption({
                 xAxis: [
                     
                     {
                         data: data.bar2, //类目数据（在类目轴中有效）
                     }
                 ],
     
                 series: [{
                     data: data.bar2_value,
                 }]
             });
        });
        
    mychart.setOption(option);
    }