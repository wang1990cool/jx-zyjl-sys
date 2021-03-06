package io.admin.modules.train.service;

import com.baomidou.mybatisplus.service.IService;
import io.admin.common.utils.PageUtils;
import io.admin.modules.train.entity.TrainProjectEntity;
import io.admin.modules.train.entity.TrainProjectWorkloadEntity;

import java.util.Map;

/**
 * 
 *
 * @author Wangcaner
 * @email wangcaner@outlook.com
 * @date 2019-01-07 11:41:08
 */
public interface TrainProjectWorkloadService extends IService<TrainProjectWorkloadEntity> {

    PageUtils queryPage(Map<String, Object> params);

}

