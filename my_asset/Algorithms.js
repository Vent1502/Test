		function newPath(str){		//产生一个精简的路径
			let first = str.indexOf("/");
			let last = str.lastIndexOf("/");
			let str1 = '';
			if (first === 0) {
				let second = str.indexOf("/",1);
				str1 = str.substring(first,second+1);
			}else{
				str1 = str.substring(0,first+1);
			}
			let str2 = str.substring(last+1,str.length);
			let new_str = str1 + str2;
			return new_str;
		}

		function myRandom(arr){		//打乱一个数组
			let len = arr.length;
			let random_index = Math.floor(Math.random()*len);
			let randoms = [];
			let new_arr = [];
			while(arr.length!==0){
				if(random_index in arr){
					let last = arr.length-1;
					let temp = arr[last];
					arr[last] = arr[random_index];
					arr[random_index] = temp;
					new_arr.push(arr[last]);
					arr.pop();
					random_index = Math.floor(Math.random()*len);
				}else{
					random_index = Math.floor(Math.random()*len);
				}
			}
			console.log(new_arr)
			console.log(arr);
		}

		function temp(arr){	//数组成员进行笛卡尔乘积（排列组合）
			let a = arr[0];
			let new_arr = [];
			for (var i = 0; i < a.length; i++) {
				for(let j = 1;j<arr.length;j++){
					for(let k = 0;k<arr[j].length;k++){
						let b = arr[j];
						let c = a[i] + b[k];
						new_arr.push(c);
					}
				}
			}
			console.log(new_arr);
		}
