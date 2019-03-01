package io.admin.modules.train.service.impl;

import io.admin.modules.train.dao.TrainProjectDao;
import io.admin.modules.train.entity.TrainProjectEntity;
import io.admin.modules.train.service.TrainProjectService;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.admin.common.utils.PageUtils;
import io.admin.common.utils.Query;



@Service("trainProjectService")
public class TrainProjectServiceImpl extends ServiceImpl<TrainProjectDao, TrainProjectEntity> implements TrainProjectService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        String projectId = (String)params.get("projectId");

        Page<TrainProjectEntity> page = this.selectPage(
                new Query<TrainProjectEntity>(params).getPage(),
                new EntityWrapper<TrainProjectEntity>().
                        like(StringUtils.isNotBlank(projectId), "project_id", projectId).
                        orderBy("id")
        );

        return new PageUtils(page);
    }

    @Override
    public PageUtils projectQueryPage(Map<String, Object> params) {
        String projectId = (String)params.get("projectId");
        String projectName = (String)params.get("projectName");
//        String order = (String)params.get("order");
        String[] statusCode = (String[])params.get("statusCode");

        Page<TrainProjectEntity> page = this.selectPage(
                new Query<TrainProjectEntity>(params).getPage(),
                new EntityWrapper<TrainProjectEntity>().
                        like(StringUtils.isNotBlank(projectId), "project_id", projectId).
                        like(StringUtils.isNotBlank(projectName), "project_name", projectName).
                        in("status_code", statusCode).
                        orderBy("id")
        );

        return new PageUtils(page);
    }

}
