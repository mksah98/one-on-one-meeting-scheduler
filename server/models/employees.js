module.exports = (Sequelize, DataTypes) => {
    const Employees = Sequelize.define(
        "employees",
        {
            email_id: {
              type: DataTypes.STRING,
              primaryKey: true,
            },
            name:{
              type:DataTypes.STRING,
              allowNull: false
            },
            tnl_id:{
                 type:DataTypes.STRING,
                 allowNull: false
            },
            role:{
               type:DataTypes.STRING,
               allowNull: false
            },
            department:{
               type:DataTypes.STRING,
               allowNull: false
            },
            reporting_manager_email:{
               type:DataTypes.STRING,
               allowNull: false           
            },
            created_at:{
                type:'TIMESTAMP',
                allowNull: false
            },
            created_by:{
                type:DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false,
            modelName: "one-one-meeting-scheduler",
            tableName: "employees",
        },
    );

    return Employees;
};
